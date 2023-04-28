import React,{ useRef } from 'react'
import { useScroll, useTransform, useAnimationFrame} from 'framer-motion';
import './Moving.css';
import {motion} from "framer-motion";
import cutout from '../../img/cutout.png';
import connect from '../../img/connect.png';




export const Moving = () => {

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress,[0,1],[0,-900]);
    
  return (
      
      <div>
        <div>
              <motion.h1 style={{x}} className='m m1'>DEVELOPER DESIGNER DEVELOPER DESIGNER DEVELOPER DESIGNER DEVELOPER</motion.h1>
        </div>

        
      </div>
  )
}

export const Moving2 =() =>{
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress,[1,0],[-200,-900]);

    return(
        <div>
              <motion.h1 style={{x}}className='m m2'>DEVELOPER DESIGNER DEVELOPER DESIGNER DEVELOPER DESIGNER DEVELOPER</motion.h1>
        </div>
    )
}

export const Moving3 =()=>{

  const ref = useRef(null);
  

  useAnimationFrame((t) => {
    const rotate = Math.cos(t / 10000) * 200;
    const y = (1 + Math.cos(t / 1000)) * -70;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>

        <img src={cutout} alt="" className="side front" />
        <img src={cutout} alt="" className="side left" />
        <img src={cutout} alt="" className="side right" />
        <img src={cutout} alt="" className="side top" />
        <img src={cutout} alt="" className="side bottom" />
        <img src={cutout} alt="" className="side back" />
      </div>
    </div>
  );
}


export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};



