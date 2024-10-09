"use client";

import {
  MainfolderSelect,
  SubTravelfolderSelect,
} from "../_components/FolderSelect";
import {
  Select,
  SelectTrigger,
  SelectValue,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { db } from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  mainfolderTitle: z.string().nonempty("Main folder is required"),
  subfolderTitle: z.string().nonempty("Subfolder is required"),
});

export type UploadType = z.infer<typeof formSchema>;

export default function PhotoInfoEdit() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mainfolderTitle: "",
      subfolderTitle: "",
    },
  });

  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //       console.log("Fetching documents from 'travel' collection...");
  //       let docs = await getDocs(collection(db, "files"));
  //       const docRef = doc(db, "travel", "toronto");
  //       const subCollectionRef = collection(docRef, "files");
  //       const subCollectionSnapshot = await getDocs(subCollectionRef);
  //       console.log(subCollectionSnapshot);
  //       docs.forEach((doc) => {
  //         let row = doc.data();
  //         console.log("Document data:", row);
  //       });
  //     } catch (error) {
  //       console.error("Error fetching documents:", error);
  //     }
  //   };

  //   test();
  // }, []);

  return (
    <Form {...form}>
      {/* Main Folder Select */}
      <FormField
        control={form.control}
        name="mainfolderTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="pl-2">Main folder name</FormLabel>
            <Select value={field.value} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose main folder" />
                </SelectTrigger>
              </FormControl>
              <MainfolderSelect />
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Sub Folder Select */}
      <FormField
        control={form.control}
        name="subfolderTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="pl-2">Sub folder name</FormLabel>
            <Select value={field.value} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose sub folder" />
                </SelectTrigger>
              </FormControl>
              <SubTravelfolderSelect />
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
