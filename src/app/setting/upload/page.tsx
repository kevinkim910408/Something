"use client";

import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
} from "@/components/ui";
import { db, storage } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  folderTitle: z.string(),
  subfolderTitle: z.string(),
  createdAt: z.date(),
  desc: z.string(),
});

export type UploadType = z.infer<typeof formSchema> & { files: string[] };

export default function SettingUpload() {
  const [files, setFiles] = useState<File[] | File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folderTitle: "",
      subfolderTitle: "",
      createdAt: new Date(),
      desc: "",
    },
  });

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const folderTitle = values.folderTitle.toLocaleLowerCase();
      const subfolderTitle = values.subfolderTitle.toLocaleLowerCase();

      const docRef = doc(db, folderTitle, subfolderTitle);
      const subCollectionRef = collection(docRef, "files");

      const data: UploadType = {
        files: [],
        folderTitle,
        subfolderTitle,
        createdAt: new Date(),
        desc: values.desc || "",
      };

      if (!files) {
        throw new Error("No files selected for upload.");
      }

      const filesArray = Array.isArray(files) ? files : [files];
      const subCollectionSnapshot = await getDocs(subCollectionRef);
      const currentItemCount = subCollectionSnapshot.size;

      for (let i = 0; i < filesArray.length; i++) {
        const file = filesArray[i];
        const itemIndex = currentItemCount + i;

        const storagePath = `${folderTitle}/${subfolderTitle}/${subfolderTitle}${itemIndex}`;
        const storageRef = ref(storage, storagePath);

        try {
          await uploadBytes(storageRef, file);
          const fileUrl = await getDownloadURL(storageRef);
          data.files.push(fileUrl);
        } catch (error) {
          console.error(`File Upload Error: ${i + 1}th file`, error);
          throw new Error(`Failed to upload ${i + 1}th file.`);
        }

        const fileDocRef = doc(
          subCollectionRef,
          `${subfolderTitle}${itemIndex}`,
        );
        await setDoc(fileDocRef, data);
      }

      alert("Upload successful!");
    } catch (error: any) {
      console.error("Error during file upload process:", error);
      alert(
        `Error: ${error.message || "An unexpected error occurred during the upload process."}`,
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Image File */}
          <FormItem>
            <FormLabel>Image Files</FormLabel>
            <FormControl>
              <Input
                multiple
                type="file"
                accept="image/*"
                onChange={handleFiles}
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          {/* Storage Name - folder title  */}
          <FormField
            control={form.control}
            name="folderTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="pl-2">Storage Folder Title</FormLabel>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose title" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="game">Game</SelectItem>
                      <SelectItem value="movie">Movie</SelectItem>
                      <SelectItem value="travel">Travel</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Sub folder Title */}
          <FormField
            control={form.control}
            name="subfolderTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub folder title</FormLabel>
                <FormControl>
                  <Input placeholder="Sub folder name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Desc */}
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button type="submit" disabled={!files}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
