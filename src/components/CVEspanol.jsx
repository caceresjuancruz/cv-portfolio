import React from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

function CVEspanol() {
  const contactItems = [
    { icon: "", description: "caceresjuan.dev@gmail.com" },
    { icon: "", description: "+5493492513815" },
    { icon: "", description: "linkedin.com/in/caceresjuancruz" },
  ];

  const skillsItems = [
    {
      description:
        "Desarrollo Web Full Stack (HTML, CSS, JavaScript, TypeScript, React, Next, Node, Bootstrap)",
    },
    {
      description:
        "Bases de Datos (SQL, No SQL, SQL Server, MySQL, MongoDB, IPFS, Modelado de datos)",
    },
    {
      description:
        "Programación (Orientada a Objetos, C#, .NET, MVC, API REST)",
    },
    {
      description:
        "Blockchain & Web3 (DApps, Solidity, Smart Contracts, Hardhat, Web3.js, Ethers.js, EVM)",
    },
  ];

  const languagesItems = [
    { description: "Inglés (Trabajo conversacional)" },
    { description: "Español (Nativo)" },
    { description: "Italiano (Básico)" },
    { description: "Portugués (Básico)" },
  ];

  const certificationsItems = [
    {
      description: "EF SET English Certificate 75/100 (C2 Proficient)",
      credential: "https://www.efset.org/cert/Ddcams",
    },
  ];

  const experienceItems = [
    {
      title: "Full Stack Web Developer Freelance",
      description:
        "Desarrollo de sitios web de manera freelance para diversos clientes, enfocando el diseño en captación de usuarios, conversión de tráfico, UX/UI simple e intuitiva, y priorizando la optimización y SEO de la web. Trabajos realizados con tecnologías como HTML, CSS, Bootstrap, JavaScript, React, Next, Node, CMS, etc.",
      date: "Enero 2022 - Actualidad",
    },
  ];

  const educationItems = [
    {
      title: "Ingeniería en Informática",
      description: "Universidad Católica de Santiago del Estero (Argentina)",
      date: "Enero 2019 - Actualidad",
    },
  ];

  return (
    <div className="row">
      <div className="col col-md-3 px-5 border-end">
        <div className="text-center">
          <a
            className="text-dark mx-1"
            href="https://www.linkedin.com/in/caceresjuancruz/"
            target="_BLANK"
            rel="noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            className="text-dark mx-1"
            href="https://github.com/caceresjuancruz"
            target="_BLANK"
            rel="noreferrer"
          >
            <FaGithubSquare size={40} />
          </a>
          <a
            className="text-dark mx-1"
            href="https://api.whatsapp.com/send?phone=5493492566832"
            target="_BLANK"
            rel="noreferrer"
          >
            <FaWhatsappSquare size={40} />
          </a>
        </div>
        <div className="text-center">
          <button className="btn btn-dark mt-2">PORTFOLIO</button>
        </div>
        <h2 className="fs-3 mt-4 fw-bold border-bottom">Contacto</h2>
        <ul>
          {contactItems.map((contactItem) => (
            <li className="fs-5">{contactItem.description}</li>
          ))}
        </ul>
        <h2 className="fs-3 mt-4 fw-bold border-bottom">
          Conocimientos y Habilidades
        </h2>
        <ul>
          {skillsItems.map((skillItem) => (
            <li className="fs-5">{skillItem.description}</li>
          ))}
        </ul>
        <h2 className=" fs-3 mt-4 fw-bold border-bottom">Idiomas</h2>
        <ul>
          {languagesItems.map((languageItem) => (
            <li className="fs-5">{languageItem.description}</li>
          ))}
        </ul>
        <h2 className=" fs-3 mt-4 fw-bold border-bottom">Certificaciones</h2>
        <ul>
          {certificationsItems.map((certificationsItem) => (
            <li className="fs-5">
              <a
                className="text-dark"
                href={certificationsItem.credential}
                target="_BLANK"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {certificationsItem.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col col-md-9 px-5">
        <h1 className="display-1 fw-bold">Juan Cruz Cáceres</h1>
        <h3 className="fw-light fs-2">
          Desarrollador Web Full Stack | Estudiante de Ingeniería Informática |
          Blockchain & Web3
        </h3>

        <h4 className="">
          <ImLocation size={25} />
          Rafaela, Santa Fe, Argentina.
        </h4>
        <h2 className="mt-5 display-4">Experiencia</h2>
        <ul>
          {experienceItems.map((experienceItem) => (
            <li>
              <p className="fs-4">
                <b className="me-2">{experienceItem.title} | </b>
                {experienceItem.date}
              </p>
              <p className="fs-6">{experienceItem.description}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-5 display-4">Educación</h2>
        <ul>
          {educationItems.map((educationItem) => (
            <li>
              <p className="fs-4">
                <b className="me-2">{educationItem.title} | </b>{" "}
                {educationItem.date}
              </p>
              <p className="fs-6">{educationItem.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CVEspanol;
