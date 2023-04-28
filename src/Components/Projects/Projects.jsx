import React from 'react';
import './Projects.css';
import Coffeeh from '../../img/projectchaa.png';
import Grocify from '../../img/gro2.png';
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../Moving/Moving";

const Projects = () => {
  return (
    <div id='Projects' className='projects'>
      <div className="bac-gr"></div>
      <div className="pr-head">My Projects</div>
      <p className="pr-para"> With a passion for creating visually stunning and user-friendly interfaces, I have honed my skills in crafting seamless experiences for users across a range of industries. Each project featured here highlights my ability to blend creativity with technical proficiency, resulting in engaging digital products that meet the needs of both businesses and end-users. Take a look at my work and see for yourself the impact that great design and thoughtful development can have on a website's success.</p>
      <div className="p-gallery">
        <motion.div variants={fadeIn("up", "spring", 1.5, 0.75)} >
          <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
          <div className="pro-1">
            <a href="https://www.figma.com/proto/kYkgyUNaDNpoy1F84oq8Po/COFFEEHOUSE-APP?page-id=0%3A1&node-id=21-15&viewport=461%2C335%2C0.33&scaling=scale-down&starting-point-node-id=21%3A10&show-proto-sidebar=1">
            <img src={Coffeeh} alt="" className='pro-img' />
            </a>
          <div className="pro-d">
            <div className="pr-name">CoffeeHouse App</div>
            <div className="pr-tech">UI/UX Design</div>
          </div>
          </div>
          
          </Tilt>
        </motion.div>
        <motion.div variants={fadeIn("up", "spring", 1.5, 0.75)} >
          <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
          <div className="pro-2">
            <a href="https://www.figma.com/proto/FDponF8PEHmvZkjIKjadIY/Untitled-(Copy)?page-id=0%3A1&node-id=1-2&viewport=780%2C32%2C0.32&scaling=scale-down&starting-point-node-id=49%3A268">
            <img src={Grocify} alt="" className='pro-img i2'/>
            </a>
            
             <div className="pro-d">
               <div className="pr-name">Grocify App</div>
               <div className="pr-tech">UI/UX Design</div>
             </div>
           
          </div>
          
          </Tilt>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
