import React from 'react';
import { motion, useScroll } from 'framer-motion';

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="flex justify-center mt-[60px]">
        <motion.div
          style={{
            borderTop: '2px solid #3c3b3b',
            width: '85%',
            scaleX: scrollYProgress,
          }}
        ></motion.div>
      </div>
      <div className="container mt-[60px]">
        <div>
          <h1 className="text-7xl text-white font-bold tracking-wider font-pachang w-1/2">
            Hey <br></br> I'm Austin
          </h1>
        </div>
        <div className="flex flex-row-reverse">
          <p className="text-2xl text-white font-medium tracking-wider font-pachang w-4/5 leading-relaxed mt-4">
            - a frontend engineer and web designer crafting immersive online
            experiences that captivate and engage users. I breathe life into
            pixels, transforming abstract ideas into visually stunning and
            intuitively navigable websites.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-10 rounded-lg ">
          <img className="rounded-3xl" src="/images/imba.png" alt="imba" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
