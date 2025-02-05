"use client";
import { Cursor } from "@/shared/ui/cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

export function Cursor1() {
  return (
    <Cursor
      attachToParent
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.01,
      }}
    >
      <motion.div
        animate={{
          width: 16,
          height: 16,
        }}
        className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
      ></motion.div>
    </Cursor>
  );
}
