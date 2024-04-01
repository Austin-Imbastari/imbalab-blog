import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardVariants } from '../utils/animations';

//this is where we will handle the data projects
type ProjectProp = {
  createdAt: string;
  name: string;
  description: string;
  github: string;
  liveDemo: string;
  category: string;
  mediaId: string;
};

const ProjectCards = ({
  createdAt,
  name,
  description,
  github,
  liveDemo,
  category,
  mediaId,
}: ProjectProp) => {
  const [imgId, setImgId] = useState<string>('');
  const fetchImageData = async (mediaId: string) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/media/${mediaId}`;
      const res = await fetch(url);
      const data = await res.json();
      setImgId(data.url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImageData(mediaId);
  }, [mediaId]);

  return (
    <motion.div
      variants={CardVariants}
      className="card w-96 bg-base-100 shadow-xl mb-8"
    >
      <figure>
        {imgId && (
          <img src={`${import.meta.env.VITE_API_URL}${imgId}`} alt={name} />
        )}
      </figure>
      <div className="card-body">
        <p className="card-normal text-[#818bf6]"> {createdAt}</p>
        <h2 className="card-title">
          {name}
          <div className="badge  border-gradient p-2">{category}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <a href={github} target="_blank">
              Source Code
            </a>
          </div>
          <div className="badge badge-outline">
            <a href={liveDemo} target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
