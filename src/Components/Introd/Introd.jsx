import React from 'react';
import './Introd.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Dribbble from '../../img/dribbble.png';
import ideating from '../../img/ideating.png';
import wireframing from '../../img/wireframing.png';
import prototyping from '../../img/prototyping.png';
import testing from '../../img/testing.png';
import PORTLAND from '../../img/PORTLAND.svg';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const Intro = () => {
  
  const transition = {duration : 2, type : 'spring'};
  return (
    <div className="intro" id='Intro'>
        

        <div className="i-left">
            <div className="i-name">
                <div className="dummy"></div>
                <span>Hey! I Am</span>
                <span>Preet Sharma</span>
                <span>UI/UX Designer with a high level of 
                  experience in creating intuitive and visually appealing user interfaces that prioritize user experience. Proven track record of producing high-quality designs that 
                  align with business goals and user needs.
                </span>
            </div>
            <Link to="Contact" smooth={true} spy={true}>
            <button className="button i-button">Hire Me</button>
            </Link>
            
            <div className="i-icons">
             <a href="https://www.linkedin.com/in/preet-sharma-045927212/"><img src={Linkedin} alt="" className="i-link"/></a> 
             <a href="https://github.com/PreetSharma29"><img src={Github} alt="" className="i-git"/></a>
             <a href="https://dribbble.com/preetsharma9699"><img src={Dribbble} alt="" className="i-drib"/></a>
            </div>
        </div>
        <div className="i-right">
          <img src={PORTLAND} alt="" />
          <motion.img initial={{left:"-36%"}} whileInView={{left: "-24%"}} transition={transition} src={ideating} alt="" />
          <motion.img initial={{left:"-20%"}} whileInView={{left: "-12%"}} transition={transition} src={wireframing} alt="" />
          <motion.img initial={{left:"58%"}} whileInView={{left: "50%"}} transition={transition} src={prototyping} alt="" />
          <motion.img initial={{left:"-30%"}} whileInView={{left: "-24%"}} transition={transition} src={testing} alt="" />
          
          
        </div>
    </div>
  )
}

export default Intro
