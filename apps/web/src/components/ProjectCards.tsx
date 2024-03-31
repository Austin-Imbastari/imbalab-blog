import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CardVariants } from '../utils/animations';

//this is where we will handle the data projects
const ProjectCards = () => {
  // const [data, setIsData] = useState();
  return (
    <motion.div
      variants={CardVariants}
      className="card w-96 bg-base-100 shadow-xl mb-8"
    >
      <figure>
        <img src="/images/soundbok.png" alt="soundboks" />
      </figure>
      <div className="card-body">
        <p className="card-normal text-[#818bf6]"> March 29 2024</p>
        <h2 className="card-title">
          Soundbok Configuration
          <div className="badge  border-gradient p-2">3D</div>
        </h2>
        <p>
          A 3D interactive website I created because I love SoundBoks company
          and the bluetooth speaker!
        </p>
        {/* <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default ProjectCards;
