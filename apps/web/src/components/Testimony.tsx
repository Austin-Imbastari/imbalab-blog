import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimony = () => {
  const ref = useRef<null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['0.2 1', '1 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <>
      <div className="container mt-[150px]">
        <div>
          <motion.h1
            style={{ y: sm }}
            className="text-8xl text-center text-white font-bold font-pachang "
          >
            Here's what you can expect from me...
          </motion.h1>
        </div>

        <div className="mt-[150px] flex flex-wrap flex-col md:flex-row gap-5 mt-gr lg:mt-lg mb-md lg:mb-xl">
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-3xl	 md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(33.33%-10px)] text-black text-6xl font-semibold"
          >
            I’ll bring years of experience, big energy and fresh thinking.
          </motion.h2>
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(66.66%-10px)] text-black text-6xl font-semibold"
          >
            Listen attentively, question assumptions, and weave
            connections—bringing a dedicated spirit and an open mind to your
            team.
          </motion.h2>
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)] text-black text-6xl font-semibold"
          >
            Bridge the chasm between creative vision and business goals—fluent
            in the languages of both realms.
          </motion.h2>
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(50%-10px)] text-black text-6xl font-semibold"
          >
            Recognize untapped potential—propelling brands to surpass even your
            wildest expectations.
          </motion.h2>
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px]rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(58.333%-10px)] text-black text-6xl font-semibold"
          >
            Giving you the foundations to scale —&nbsp;from world-class design
            and advisory to building your future team.
          </motion.h2>
          <motion.h2
            style={{
              backgroundImage: 'linear-gradient(45deg, #7a87fb, #ffd49c)',
              scale: scaleProgress,
              y: sm,
            }}
            className="min-h-[350px] lg:min-h-[500px] rounded-lg md:rounded-3xl p-[30px] lg:p-[50px] w-full md:w-[calc(41.667%-10px)] text-black text-6xl font-semibold"
          >
            Inspire teams to accelerate with fervor and revel in the
            exhilarating journey along the way.
          </motion.h2>
        </div>
      </div>
    </>
  );
};

export default Testimony;
