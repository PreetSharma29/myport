// import React from 'react';
// import './Navbar.css';
// import portlogo from '../../img/portlogo.png';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <div>
//       <div className='n-wrapper'>
//         <div className='n-left'>
//             <div className='n-logo'>
//               <img src={portlogo} alt="" />
//             </div>
            
//         </div>
//         <div className='n-right'>
//             <div className="n-list">
//                 <div style={{listStyleType:'none'}}>
                  
//                   <Link spy={true} to='Intro' smooth={true} className='n-item' activeClass='active'>
//                   Home
//                   </Link>
                  
//                   <Link spy={true} to='Works' smooth={true} className='n-item' activeClass='active'>
//                   Works
//                   </Link>             

//                     <Link spy={true} to='Process' smooth={true} className='n-item' activeClass='active'>
//                     Process
//                     </Link>

//                     <Link spy={true} to='Projects' smooth={true} className='n-item' activeClass='active'>
//                     Projects
//                     </Link>

//                     <Link spy={true} to='Contact' smooth={true} className='n-contact n-item' activeClass='active'>
//                     Contact
//                     </Link>


//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;



import React, { useState } from 'react';
import './Navbar.css';
import portlogo from '../../img/portlogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className={`n-wrapper ${isMobileMenuOpen ? 'n-wrapper-open' : ''}`}>
        <div className='n-left'>
          <div className='n-logo'>
            <img src={portlogo} alt="" />
          </div>
        </div>
        <div className='n-right'>
          <div className="n-list">
            <div style={{listStyleType:'none'}}>
              <Link spy={true} to='Intro' smooth={true} className='n-item' activeClass='active'>
                Home
              </Link>
              <Link spy={true} to='Works' smooth={true} className='n-item' activeClass='active'>
                Works
              </Link>             
              <Link spy={true} to='Process' smooth={true} className='n-item' activeClass='active'>
                Process
              </Link>
              <Link spy={true} to='Projects' smooth={true} className='n-item' activeClass='active'>
                Projects
              </Link>
              <Link spy={true} to='Contact' smooth={true} className='n-contact n-item' activeClass='active'>
                Contact
              </Link>
            </div>
          </div>
          <div className="n-menu-icon" onClick={handleMobileMenuClick}>
            <div className={`n-menu-icon-bar ${isMobileMenuOpen ? 'n-menu-icon-bar-open' : ''}`}></div>
            <div className={`n-menu-icon-bar ${isMobileMenuOpen ? 'n-menu-icon-bar-open' : ''}`}></div>
            <div className={`n-menu-icon-bar ${isMobileMenuOpen ? 'n-menu-icon-bar-open' : ''}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;