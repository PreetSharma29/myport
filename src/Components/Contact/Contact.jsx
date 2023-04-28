import React from 'react';
import {Moving, Moving2, Moving3, Moving4}  from "../Moving/Moving";
import './Contact.css';
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Me from '../../img/me.png';

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qsc0ess",
        "template_ovapysu",
        form.current,
        "7NAwCwstBdw0tlIzb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div id='Contact' className='contact'>
      <div className="move">
      <Moving />
      <Moving2 />
      </div>
      
      <div>
        <div className="contact-form">
          <div className="w-left">
            <div className="awesome">
              <div className="cubem"><Moving3 /></div>
              <span className="l-text touch">Get in Touch</span>
              <span className="l-text contact">Contact Me</span>
            </div>
          </div>
        

        <div className="c-right">
          <img src={Me} alt="" className="me" />
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name" required/>
            <input type="email" name="user_email" className="user" placeholder="Email" required/>
            <textarea name="message" className="user" placeholder="Message" required></textarea>
            <div className="c-but">
            <input type="submit" value="Send" className="button cbut submit" />
            <input type="reset" value="Clear" className="button cbut clear" />
            </div>
            <span>{done && "Thanks for contacting me!"}</span>
          </form>
        </div>

        </div>
      </div>

      <div className="footer">
      ©2023 Preet Sharma. All Rights Reserved.
      </div>
    </div>
  )
}

export default Contact
