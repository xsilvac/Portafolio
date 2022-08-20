import React, { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Skills from './Skills';
import data from '../data/data.json'


const Home = () => {
 // console.log(data)
  const [bd, setBd] = useState([]);
  const [filter, setFilter] = useState(bd);
  
  useEffect(() => {
    setBd([...data.skills])
    setFilter([...data.skills])
  }, [])
  
  const filterProducts = (category) => {
    setFilter(bd.filter(x => x.category === category))
  }
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
        <div id="btnsProducts" >
        <button className="btn btn-outline-dark me-2" onClick={() => setFilter(bd)}>Skills</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("softSkill")}>SoftSkills</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("hardSkill")}>HardSkills</button>
      </div>
        <div className="containers">
          {filter.map((info) =>
          <div  key={info.skill}>
              <Skills skill={info.skill} percent={info.percent} image={info.url}/>
            </div>
          )}
          </div>
        </div>
  )
}

export default Home