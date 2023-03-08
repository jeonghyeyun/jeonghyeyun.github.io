import React, { useRef } from 'react'
import './ContactStyles.css'
import emailjs from "@emailjs/browser";
import Arrow from '../assets/images/arrow.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kvu8ozn', 'template_pk8vgdr', form.current, 'XC3vWT9n8DqEHCCDf')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className='contact-box'>
      <div className='contact-form'>
        <h1>Love to hear from you, <br/> <span className="heading-2">Get in touch :)</span></h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="basic-info">
            <div className="basic-col-1">
              <label htmlFor="user_name">Name</label>
              <input type="text" id="user_name" name="user_name" placeholder="Harry Potter" style={{fontFamily: "NeueMontreal-Regular"}}/>
            </div>
            <div className="basic-col-2">
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" placeholder="dobbyisfree@hogwarts.com" style={{fontFamily: "NeueMontreal-Regular"}}/>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Message" style={{fontFamily: "NeueMontreal-Regular"}}/>
          </div>
          
          <input id="submit" type="submit" value="Submit" />
        </form>
        <div className='links'>
          <a href="https://github.com/jeonghyeyun" target="_blank" rel="noreferrer">GITHUB<img src={Arrow} alt=''/></a>
          <a href="https://www.linkedin.com/in/hyeyunjeong/" target="_blank" rel="noreferrer">LINKEDIN<img src={Arrow} alt=''/></a>
          <a href="https://dribbble.com/hyeyunjeong" target="_blank" rel="noreferrer">DRIBBBLE<img src={Arrow} alt=''/></a>
          <a href="https://tinyurl.com/5n6wx2s9" target="_blank" rel="noreferrer">RESUME<img src={Arrow} alt=''/></a>
        </div>
      </div>
    </div>
  );
};

export default Contact
