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
  subfolderTitle: z.string(),
  createdAt: z.date(),
});

export type UploadType = z.infer<typeof formSchema> & { files: string[] };

export default function SettingUpload() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subfolderTitle: "",
      createdAt: new Date(),
    },
  });
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="subfolderTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="pl-2">Sub folder title</FormLabel>
            <Select value={field.value} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Title" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="game">Game</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
}
