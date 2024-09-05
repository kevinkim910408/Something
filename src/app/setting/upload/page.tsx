"use client";

import {
  Input,
  RadioGroup,
  RadioGroupItem,
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
import { collection, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  folderTitle: z.string(),
  subfolderTitle: z.string(),
  fileTitle: z.string(),
  createdAt: z.string(),
  desc: z.string(),
});

export type UploadType = z.infer<typeof formSchema> & { files: string[] };

export default function SettingUpload() {
  const [uploadType, setUploadType] = useState<string>("multiple");
  const [files, setFiles] = useState<File[] | File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      folderTitle: "",
      subfolderTitle: "",
      fileTitle: "",
      createdAt: "",
      desc: "",
    },
  });

  const handleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(
        uploadType === "multiple"
          ? Array.from(selectedFiles)
          : selectedFiles[0],
      );
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const dbCollection = collection(
      db,
      `${values.folderTitle.toLocaleLowerCase()}`,
    );
    const data: UploadType = {
      files: [],
      folderTitle: "",
      subfolderTitle: "",
      fileTitle: "",
      createdAt: "",
      desc: "",
    };

    if (files) {
      // Upload image to storage and get url
      const filesArray = Array.isArray(files) ? files : [files];
      for (let i = 0; i < filesArray.length; i++) {
        const file = filesArray[i];
        const storageRef = ref(
          storage,
          `${values.folderTitle.toLocaleLowerCase()}/${values.subfolderTitle.toLocaleLowerCase()}/${values.fileTitle}${i}`,
        );
        try {
          await uploadBytes(storageRef, file);
          const fileUrl = await getDownloadURL(storageRef);
          data.files.push(fileUrl);
        } catch (error) {
          console.error(`File Upload Error: ${i + 1}th :`, error);
        }

        // await setDoc(
        //   doc(
        //     dbCollection,
        //     `${values.subfolderTitle.toLocaleLowerCase()}/${values.fileTitle}${i}`,
        //   ),
        //   data,
        // );
      }

      console.log(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Image File */}
          <div className="flex flex-col gap-4">
            <RadioGroup
              defaultValue="multiple"
              className="flex items-center gap-4"
              onValueChange={setUploadType}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multiple" id="multiple" />
                <label htmlFor="multiple">Upload Multiple Images</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="single" id="single" />
                <label htmlFor="single">Upload Single Image</label>
              </div>
            </RadioGroup>
            <Input
              multiple={uploadType === "multiple"}
              type="file"
              accept="image/*"
              onChange={handleFiles}
            />
          </div>

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

          {/* File Title */}
          <FormField
            control={form.control}
            name="fileTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>File title</FormLabel>
                <FormControl>
                  <Input placeholder="File name" {...field} />
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
