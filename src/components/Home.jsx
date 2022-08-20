import React, { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Skills from './Skills';
import data from '../data/data.json'


const Home = () => {
 // console.log(data)
  const [bd, setBd] = useState([]);
  
  useEffect(() => {
    setBd(data.skills)
    console.log(bd)
  }, [])
  
  return (
    <div className="title">
      <Typewriter
        onInit={(typewriter)=> {
        typewriter
        .typeString("Hola, mi nombre es <strong> Ximena Silva ... </strong> <br/>")
        .pauseFor(1000)
        .typeString("Soy front end developer")
        .start();
        }}
        />
      {bd.map((info) =>
        <Skills technology={info.technology} percent={info.percent} image={info.url}/>
      )}
      
    </div>
  )
}

export default Home