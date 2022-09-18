import React from 'react';
import './Contact.css';
import myemail from '../Image/gmail.png';
import linkedin from '../Image/linkedin.png';
import github from '../Image/github.png';

function Contact() {
  return (
    <>
    <div className='containers'>
    <h3>Contact Me</h3>
    </div>  
    <div id="contain">
    <a href="mailto:joshlee@gmail.com" rel={"noreferrer"} target={'_blank'}><img src={myemail} alt="gmail" className='imgcontact'/></a>
    <a href="https://www.linkedin.com/in/josh-lee-6522b1117/" rel={"noreferrer"} target={'_blank'}><img src={linkedin} alt="linkedin" className='imgcontact'/></a>
    <a href="https://github.com/JoshLeez" rel={"noreferrer"} target={'_blank'}><img src={github} alt="github" className='imgcontact'/></a>
    <p>E-Mail : joshlee1606@gmail</p>
    <p>Josh lee</p>
    <p>Joshleez</p>
    </div>
    </>
  )
}

export default Contact