"use client";

import {
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import React, { useState } from "react";

export default function SettingUpload() {
  const [multipleFiles, setMultipleFiles] = useState<File[] | null>(null);
  const [singleFile, setSingleFile] = useState<File | null>(null);

  const [uploadType, setUploadType] = useState<string>("multiple");
  const [folderName, setFolderName] = useState<string>("");

  const handleMultipleFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      setMultipleFiles(selectedFiles);
    }
  };

  const handleSingleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSingleFile(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Image File */}
      <div>
        <RadioGroup
          defaultValue="multiple"
          className="flex items-center gap-4"
          onValueChange={(value) => setUploadType(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="multiple" id="multiple" />
            <label htmlFor="multiple">Upload Multiple Images</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="single" id="single" />
            <label htmlFor="single"> Uploade Singe Image</label>
          </div>
        </RadioGroup>
        {uploadType === "multiple" ? (
          <Input
            multiple
            type="file"
            accept="image/*"
            onChange={handleMultipleFiles}
          />
        ) : (
          <Input type="file" accept="image/*" onChange={handleSingleFile} />
        )}
      </div>

      {/* Storage Name  */}
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Storage Name" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Storage Folder Name</SelectLabel>
            <SelectItem value="game">Game</SelectItem>
            <SelectItem value="movie">Movie</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Input placeholder="Title" />
    </div>
  );
}
