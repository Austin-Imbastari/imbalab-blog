import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { heyAustin, Description, AustinImage } from '../utils/animations';

const AboutSection = () => {
  const ref = useRef<null>(null);
  const isInView = useInView(ref, {
    // once: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
      <div className="container mt-[60px]" ref={ref}>
        <div>
          <motion.h1
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={heyAustin}
            exit="exit"
            className="text-7xl text-white font-bold tracking-wider font-pachang w-1/2"
          >
            Hey <br></br> I'm Austin ✌🏽
          </motion.h1>
        </div>
        <div className="flex flex-row-reverse">
          <motion.p
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={Description}
            exit="exit"
            className="text-2xl text-white font-medium tracking-wider font-pachang w-4/5 leading-relaxed mt-4"
          >
            - a frontend engineer and web designer crafting immersive online
            experiences that captivate and engage users. I breathe life into
            pixels, transforming abstract ideas into visually stunning and
            intuitively navigable websites.
          </motion.p>
        </div>
        <div className="max-w-6xl mx-auto mt-10 rounded-lg ">
          <motion.img
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={AustinImage}
            style={{
              scale: scaleProgress,
            }}
            exit="exit"
            className="rounded-3xl"
            src="/images/imba.png"
            alt="imba"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
