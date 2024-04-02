import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { newProjects, ContainerVariants } from '../utils/animations';
import { Link } from 'react-router-dom';
import star from '/images/star.svg';
import ProjectCards from './ProjectCards';

type Hero = {
  description: string;
  github: string;
  livedemo: string;
  media: string;
  shortDescription: string;
};

type CombinedType = {
  blockName: string;
  blockType: string;
  categories: { id: string; title: string; createdAt: string }[]; // Update categories type
  id: string;
  limit: number;
  populateBy: string;
  relationTo: string;
  selectedDocs: {
    relationTo: string;
    value: {
      categories: string[];
      content: {
        root: any;
      };
      createdAt: string;
      hero: Hero;
      id: string;
    };
  }[];
};

const NewProjects = () => {
  const fadeRef = useRef<null>(null);
  const isInView = useInView(fadeRef);
  const { scrollYProgress } = useScroll({
    target: fadeRef,
    offset: ['0 1', '1 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  const [data, setIsData] = useState<CombinedType[]>([]);
  const handleFetchNewProjects = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/pages/660a13136beadca7a4a8614c?locale=undefined&draft=true&depth=1`;
      const res = await fetch(url);
      const data = await res.json();
      const { layout } = data;
      const newProjects = layout.slice(0, 2);
      setIsData(newProjects);
    } catch (e) {
      console.log(e, 'There was an error fetching the new projects data!');
    }
  };
  useEffect(() => {
    handleFetchNewProjects();
  }, []);

  return (
    <>
      <div className="container mt-[60px]">
        <motion.div
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={newProjects}
          exit="exit"
          className="flex"
        >
          <motion.h1 className="text-white text-6xl font-poppins">
            New Projects
          </motion.h1>
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
            {data?.map((project) => (
              <div key={project.id}>
                <ProjectCards
                  blogId={project.selectedDocs[0].value.id}
                  name={project.blockName}
                  category={project.categories[0].title}
                  createdAt={project.categories[0].createdAt}
                  description={project.selectedDocs[0].value.hero.description}
                  github={project.selectedDocs[0].value.hero.github}
                  liveDemo={project.selectedDocs[0].value.hero.livedemo}
                  mediaId={project.selectedDocs[0].value.hero.media}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NewProjects;
