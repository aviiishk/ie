"use client";

import { motion } from "framer-motion";

export function TimelineContent({
  children,
  className,
  customVariants,
  animationNum,
  timelineRef,
  as: Tag = "div",
}: any) {
  return (
    <motion.div
      custom={animationNum}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={customVariants}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  );
}