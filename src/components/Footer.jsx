import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
 // let date = new Date();
  //let year = date.getFullYear();

  const style={
    backgroundColor: 'black',
    font: '20px sans-ser',
    color:'white',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px'
  }

  return (
   
          <div className="footer-icons" style={style}>
            <div className="social-icons">
              <a
                href="https://github.com/phvania"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://twitter.com/phvania"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/phvania/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div> 
          </div>
  
      
  );
}

export default Footer;
