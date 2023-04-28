import React, {useRef} from 'react';
import './Process.css';
import {motion} from 'framer-motion';

const Process = () => {
  
 
  const transition = {delay:0.07, duration : 3, type : 'spring'};

  return (
    <div className="process" id='Process'>
        
      <div className='p-head'>
        My Process
      </div>
      <p className="p-des">
      I believe that a successful design is not just about creating a beautiful interface, but it's also about solving problems and improving the user's experience.

      In this section, I will take you through my design process, which includes a deep understanding of user needs, extensive research, and iterative design solutions. My approach is always user-centered, and I aim to create intuitive and delightful experiences that align with the client's goals.

      Throughout my design process, I pay close attention to every detail and collaborate closely with stakeholders to ensure that the final product meets their requirements and exceeds their expectations. So, whether you are a potential client or an industry peer, I invite you to explore my design process and see how I can help bring your vision to life.
      </p>
       <div className="element brief p-left">
         <motion.div initial={{left:"-0.1rem"}} whileInView={{left: "7rem"}} transition={transition} className='num' >1</motion.div>
         <div className='name'>Briefing</div>
         <div className='describe'>Send me a detailed brief of the problem statement.</div>
       </div>

       <div className="element research p-right">
         <motion.div initial={{right:"-0.1rem"}} whileInView={{right: "22rem"}} transition={transition} className='num' >2</motion.div>
         <div className='name'>Research</div>
         <div className='describe'>Development Begins with competitive and visual analysis, target audience and market research.</div>
      </div>


       <div className="element wireframe p-left">
         <motion.div initial={{left:"-0.1rem"}} whileInView={{left: "7rem"}} transition={transition} className='num' >3</motion.div>
         <div className='name'>Wireframing</div>
         <div className='describe'>Designing the logical structure of the future UI based on research and structure from the customer.</div>
       </div>

       <div className="element testing p-right">
         <motion.div initial={{right:"-0.1rem"}} whileInView={{right: "22rem"}} transition={transition} className='num'>4</motion.div>
         <div className='name'>Testing</div>
         <div className='describe'>Starting with research plan , I will conduct usability study, and then find out themes and insights.</div>
      </div>

       <div className="element high p-left">
         <motion.div initial={{left:"-0.1rem"}} whileInView={{left: "7rem"}} transition={transition} className='num' >5</motion.div>
         <div className='name'>High-Fidelity Prototyping</div>
         <div className='describe'>Design the high-fidelity prototype which will be similar to your final developed product.</div>
       </div>

      <div className="element support p-right">
       <motion.div initial={{right:"-0.1rem"}} whileInView={{right: "22rem"}} transition={transition} className='num'>6</motion.div>
       <div className='name'>Transferring Files & Support</div>
       <div className='describe'>Prepare a design file with a fully developed project, including adaptive versions and all the necessary material to give to your developer.</div>
      </div>

      
      </div>
  );
};

export default Process;

