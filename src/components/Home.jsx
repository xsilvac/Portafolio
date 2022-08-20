import React, { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Skills from './Skills';
import data from '../data/data.json'


const Home = () => {
 // console.log(data)
  const [bd, setBd] = useState([]);
  
  useEffect(() => {
    setBd([...data.skills])
    // console.log([...data.softSkills])
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
        <div className="containers">
      {bd.map((info) =>
      <div  key={info.skill}>
        {/* <div className="row justify-content-center">
          <div className="col-6 col-md-3 py-2"> */}
          <Skills skill={info.skill} percent={info.percent} image={info.url}/>
          {/* </div>
        
        </div> */}
        
        </div>
        
      )}
      </div>
      
    </div>
  )
}

export default Home