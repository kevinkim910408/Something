"use client";

import MainCard from "./_components/MainCard";
import { cards } from "./data/mainCard";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import React from "react";

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

export default function Setting() {
  return (
    <div className="grid grid-cols-2 gap-4 w-full sm:grid-cols-3">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className={cn("rounded-xl shadow-lg " + card.className)}
        >
          <MainCard
            title={card.title}
            link={card.link}
            desc={card.desc}
            icon={card.icon}
          />
        </motion.div>
      ))}
    </div>
  );
}
