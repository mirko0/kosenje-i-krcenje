import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef, // remove this if your container is not fixed height
    // offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("items-start w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-4 md:gap-10 py-10 px-4 md:px-10"
        ref={gridRef}
      >
        <div className="grid gap-4 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="w-full object-cover object-left-top rounded-3xl"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="w-full object-cover object-left-top rounded-3xl"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 md:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="w-full object-cover object-left-top rounded-3xl"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
