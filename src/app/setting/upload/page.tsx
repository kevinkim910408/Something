"use client";

import { MainfolderSelect } from "../_components/FolderSelect";
import {
  Input,
  Select,
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
import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const formSchema = z.object({
  folderTitle: z.string(),
  subfolderTitle: z.string(),
  createdAt: z.date(),
  desc: z.string(),
  subCollection: z.string(),
});

export type UploadType = z.infer<typeof formSchema>;

export default function SettingUpload() {
  const [files, setFiles] = useState<File[] | File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folderTitle: "",
      subfolderTitle: "",
      createdAt: new Date(),
      desc: "",
      subCollection: "files",
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

      if (!files) {
        throw new Error("No files selected for upload.");
      }

      const filesArray = Array.isArray(files) ? files : [files];

      for (let i = 0; i < filesArray.length; i++) {
        const file = filesArray[i];

        const storagePath = `${folderTitle}/${subfolderTitle}/${subfolderTitle}${uuidv4()}`;
        const storageRef = ref(storage, storagePath);

        await uploadBytes(storageRef, file);
        const fileUrl = await getDownloadURL(storageRef);

        const fileDocRef = doc(
          subCollectionRef,
          `${subfolderTitle}${uuidv4()}`,
        );
        const fileData = {
          folderTitle,
          subfolderTitle,
          createdAt: new Date(),
          desc: values.desc || "",
          fileUrl,
          subCollection: "files",
        };

        await setDoc(fileDocRef, fileData);
        alert("Upload successful!");
      }
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
                  <MainfolderSelect />
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
