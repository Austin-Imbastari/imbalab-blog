import React, { useRef } from 'react';
import star from '/images/star.svg';
import ProjectCards from './ProjectCards';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { newProjects, ContainerVariants } from '../utils/animations';

const NewProjects = () => {
  const fadeRef = useRef<null>(null);
  const isInView = useInView(fadeRef);
  const { scrollYProgress } = useScroll({
    target: fadeRef,
    offset: ['0 1', '1 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <>
      <div className="container  mt-[60px]">
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={newProjects}
          exit="exit"
          className="flex"
        >
          <h1 className="text-white text-6xl font-poppins">New Projects</h1>
          <img className="ml-4" src={star} alt="star svg" />
        </motion.div>
        <div className="flex justify-center mt-10">
          <motion.div
            ref={fadeRef}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            variants={ContainerVariants}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
          >
            <ProjectCards />
            <ProjectCards />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NewProjects;
