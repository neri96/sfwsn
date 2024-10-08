export const navElemVariants = {
  hidden: { scale: 0, visibility: "hidden" as const },
  visible: (index: number) => ({
    scale: 1,
    visibility: "visible" as const,
    transition: {
      delay: index * 0.1 + 0.2,
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 20,
      mass: 1.5,
    },
  }),
};
