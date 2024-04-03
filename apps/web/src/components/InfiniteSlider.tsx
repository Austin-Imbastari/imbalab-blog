import { useRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

type ParallaxProps = {
  baseVelocity: number;
};

function InfiniteSlider({ baseVelocity = 100 }: ParallaxProps) {
  const fadeRef = useRef<null>(null);
  const isInView = useInView(fadeRef);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={fadeRef}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
      className="parallax bg-black"
    >
      <motion.div className="scroller" style={{ x }}>
        <span className="text-white ml-5 font-poppins tracking-wider	">
          I DESIGN & BUILD WEBSITES
        </span>
        <span className="text-white ml-5 font-poppins tracking-wider	">
          I DESIGN & BUILD WEBSITES
        </span>
        <span className="text-white ml-5 font-poppins tracking-wider	">
          I DESIGN & BUILD WEBSITES
        </span>
        <span className="text-white ml-5 font-poppins tracking-wider	">
          I DESIGN & BUILD WEBSITES
        </span>
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;
