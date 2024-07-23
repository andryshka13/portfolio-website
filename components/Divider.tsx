"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-gray-300 my-16 h-20 w-1 rounded-full hidden sm:block 
      dark:bg-opacity-40"
    ></motion.div>
  );
}
