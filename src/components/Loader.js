import React, { useEffect } from "react";
import Image from "./Image";
import { motion } from "framer-motion"

// Variants 
const container = {
  show: {
    transition: {
      staggerChildren : 0.35,
    }
  }
};

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
      transition: {
        ease: [0.6, 0.01, 0.0, 0.95],
        duration: 1.6
      },
  },

  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8
    }
  }
}

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <motion.div className='loader'                 
    initial="hidden"
    animate="show"
    exit="exit"
    variants={container} >
      <div className='loader-inner'>
        <ImageBlock variants={item}  id='image-1' />
        <div className='transition-image'>
          <img
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            alt='random alt'
          />
        </div>
        <ImageBlock variants={item} id='image-3' />
        <ImageBlock variants={item} id='image-4' />
        <ImageBlock variants={item} id='image-5' />
      </div>
    </motion.div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div variants={variants}
                className={`image-block ${id}`}>
                    <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
