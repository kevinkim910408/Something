"use client";

import { Button } from "@/components/ui";
import { db } from "@/config";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface FolderType {
  id: string;
  subFolders: string[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function FolderManager() {
  const [folders, setFolders] = useState<FolderType[]>([]);
  const [selectedSubFolders, setSelectedSubFolders] = useState<string[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const folderCollection = collection(db, "folders");
        const folderSnapshot = await getDocs(folderCollection);
        const folderList: FolderType[] = folderSnapshot.docs.map((doc) => ({
          id: doc.id,
          subFolders: doc.data().subFolders || [],
        }));

        setFolders(folderList);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchFolders();
  }, []);

  const handleFolderClick = (subFolders: string[]) => {
    setSelectedSubFolders(subFolders);
  };

  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {folders.map((folder, index) => (
          <motion.div
            key={folder.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            // className={cn("rounded-xl shadow-lg " + card.className)}
          >
            <FolderCard
              folder={folder}
              onClick={() => handleFolderClick(folder.subFolders)}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        {/* Display subfolders */}
        {selectedSubFolders.length > 0 ? (
          <ul>
            {selectedSubFolders.map((subFolder, index) => (
              <li key={index}>{subFolder}</li>
            ))}
          </ul>
        ) : (
          <p>No subfolders selected</p>
        )}
      </div>
    </div>
  );
}

const FolderCard = ({
  folder,
  onClick,
}: {
  folder: FolderType;
  onClick: () => void;
}) => {
  return <Button onClick={onClick}>{folder.id.toUpperCase()}</Button>;
};
