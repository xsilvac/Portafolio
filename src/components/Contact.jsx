import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      nombre: name,
      correo: email,
      mensaje: message,
    };
    console.log(name, email, message);

    emailjs
      .send(
        "service_oh1hmch",
        "template_few4idk",
        templateParams,
        "7Bfc459Rrk4HdZiSP"
      )
      .then(
        (response) => {
          alert("SUCCESS!", response.status, response.text);
        },
        (err) => {
          alert("FAILED...", err);
        }
      );
    console.log(name, email, message);
  };

  return (
    <section id="contact" className="container-fluid">
      <div className="contactDiv1">
        <h1>Comunícate conmigo</h1>
        <p>
          Si quieres ponerte en contacto conmigo, hablar sobre una colaboración
          en algún proyecto o simplemente saludar, me encantaría saber de ti.
          Completa el formulario y envíame un correo electrónico o contáctame
          por mis redes sociales.
        </p>
        <div>
          <a href="https://github.com/xsilvac" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ximenasilva-frontend/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <form className="contactDiv2" onSubmit={(e) => sendEmail(e)}>
        <h1>Envíame un mensaje</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="name@example.com"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            placeholder="Contraseña"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingPassword">Correo</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="mensaje"
            name="mensaje"
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: 100 }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Mensaje</label>
        </div>
        <button id="btnSend">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
