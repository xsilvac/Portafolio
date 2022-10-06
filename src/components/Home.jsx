import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import data from "../data/data.json";
import woman from "../img/woman.png";

const Home = () => {
  // console.log(data)
  const [bd, setBd] = useState([]);
  const [filter, setFilter] = useState(bd);
  const [webs, setWebs] = useState([]);

  useEffect(() => {
    setBd([...data.skills]);
    setFilter([...data.skills]);
    setWebs([...data.projects]);
  }, []);

  const filterSkills = (category) => {
    setFilter(bd.filter((x) => x.category === category));
  };
  return (
    <div>
      <section id="home" className="titleName" style={{ marginTop: 100 }}>
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hola, mi nombre es <spam id='span'> Ximena Silva ... </spam> <br/>"
                )
                .pauseFor(1000)
                .typeString("Soy front end developer")
                .start();
            }}
          />
          <p>
            Soy una mujer decidida, perseverante y me gusta asumir retos. Me
            motiva mis ganas de desarrollarme y crecer profesionalmente, busco
            aportar soluciones digitales creativas y brindar una gran
            experiencia al usuario.
          </p>
        </div>
        <img src={woman} alt="" />
      </section>

      <section id="projects">
        <br />
        <br />
        <br />
        <br />
        <div className="containers">
          {webs.map((info) => (
            <div className="containerDiv" key={info.title}>
              <Projects
                image={info.url}
                title={info.project}
                name={info.title}
                github={info.github}
                web={info.web}
                description={info.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <br />
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(bd)}
          >
            Skills
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSkills("softSkill")}
          >
            SoftSkills
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSkills("hardSkill")}
          >
            HardSkills
          </button>
        </div>
        <div className="containers">
          {filter.map((info) => (
            <div key={info.skill}>
              <Skills
                skill={info.skill}
                percent={info.percent}
                image={info.url}
              />
            </div>
          ))}
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <Contact />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
