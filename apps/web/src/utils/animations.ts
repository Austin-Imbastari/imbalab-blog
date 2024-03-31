export const navbar = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
    delay: 0.5,
  },
};

export const newProjects = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const heyAustin = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
export const Description = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const AustinImage = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 1,
    },
  },
};

export const ContainerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5,
    },
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
      when: 'afterChildren',
    },
  },
};

export const CardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
};
