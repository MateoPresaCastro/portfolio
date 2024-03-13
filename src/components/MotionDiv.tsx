"use client";

import { motion } from "framer-motion";

export default function MotionDiv({ children }: { children: React.ReactNode }) {
  return <motion.div>{children}</motion.div>;
}
