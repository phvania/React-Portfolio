import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <h1 style={{background: 'pink'}}>My Portfolio</h1>
        <nav
        style={{padding:'0.5rem', fontSize:'1rem'}}>
            <Link to="/">Home</Link> |{"       "}
            <Link to="/about">About Me</Link> |{"       "}
            <Link to="/projects">My Projects</Link>|{"       "}
            <Link to="/contact">Contact Me</Link>|{"       "}
            <Link to='/resume'>Resume</Link>
        </nav>
     
        
    </div>
  )
}
