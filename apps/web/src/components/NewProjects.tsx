import React, { useRef } from 'react';
import star from '/images/star.svg';
import ProjectCards from './ProjectCards';
import { motion, useInView, useScroll } from 'framer-motion';
import { newProjects } from '../utils/animations';

const NewProjects = () => {
  const fadeRef = useRef<null>(null);
  const isInView = useInView(fadeRef);
  const { scrollYProgress } = useScroll({
    target: fadeRef,
    offset: ['0 1', '1 1'],
  });
  return (
    <>
      <div className="container h-screen mt-[60px]">
        <div className="flex">
          <h1 className="text-white text-6xl font-poppins">New Projects</h1>
          <img className="ml-4" src={star} alt="star svg" />
        </div>

        <div className="flex justify-center mt-10">
          <motion.div
            ref={fadeRef}
            // initial="hidden"
            // animate={isInView ? 'show' : 'hidden'}
            // variants={newProjects}
            // exit="exit"
            className=""
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
            }}
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
