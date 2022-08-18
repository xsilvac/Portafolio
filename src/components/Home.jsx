import React from 'react'
import Typewriter from "typewriter-effect";

const Home = () => {
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
    </div>
  )
}

export default Home