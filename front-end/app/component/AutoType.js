"use client"

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


function AutoType({ text, options = {} }) {
    const el = useRef(null);
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Software Developer", "Backend Developer", "Frontend Developer", "Data Scientist"],
        typeSpeed: 50, // Adjust typing speed
        backSpeed: 50, // Disable backspacing
        loop: true // Loop the animation
      });
  
      return () => typed.destroy(); // Cleanup
    }, [text, options]);
  
    return <span ref={el} />;
  }
  
  export default AutoType;