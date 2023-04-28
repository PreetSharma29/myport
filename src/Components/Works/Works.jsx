import React from 'react'
import Garena from '../../img/GARENA BATTLE.png';
import skills from '../../img/5skills.jpg';
import international from '../../img/International Friendship Day.jpeg';
import kargil from '../../img/Kargil Vijay Diwas.jpeg';
import parents from '../../img/National__Parents__Day.jpg';
import nelson from '../../img/Nelson_M._International_day.png';
import nature from '../../img/World Nature Conservation Day.jpeg';
import webd from '../../img/Web__development.jpg';
import {motion} from "framer-motion";
import './Works.css';
import backg from '../../img/workbackg.png';

const images = [
  Garena,
  skills,
  webd,
  international,
  kargil,
  parents,
  nelson,
  nature,
];

const Works = () => {
  
  return (
    
        <div id='Works' className='works'>
          <div className="bg"></div>
          <div className='w-head'>My Works</div>
          <p className='w-para'>I am excited to present my collection of graphic design posters. With an eye for composition, color, and typography, I love the challenge of creating visually compelling posters that not only grab attention but also communicate a clear message. From event promotions to social causes, each poster represents a unique opportunity for me to blend creativity and purpose, and to engage with audiences on a deeper level. In this section, you will find a range of posters that showcase my ability to merge form and function, and to create designs that not only look great but also achieve their intended goal.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }} className='i-grid'>
          {images.map((image, index) => (
          <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, delay: 1.5}}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }} 
          key={index} style={{ flex: '0 0 25%', padding: '50px' }} 
          className='w-img' >
          <div>
            <img src={image} alt={`Image ${index}`} style={{ width: '100%' }} className='w-image'/>
          </div>
        </motion.div>
      ))}
    </div>

        </div>
    
  );
};

export default Works;