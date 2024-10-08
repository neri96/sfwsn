export const appear = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const appearTransform = {
  initial: { opacity: 0, y: 10, x: "-50%" },
  animate: { opacity: 1, y: "-50%", x: "-50%" },
  exit: { opacity: 0, y: 10, x: "-50%" },
};

export const appearBounce = {
  initial: { opacity: 0, y: 10, x: "-50%" },
  animate: { opacity: 1, y: 0, x: "-50%" },
  exit: { opacity: 0, y: 10, x: "-50%" },
  transition: {
    type: "spring",
    damping: 5,
    mass: 0.7,
    stiffness: 110,
  },
};
