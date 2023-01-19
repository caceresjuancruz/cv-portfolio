import React from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { NavLink } from "react-router-dom";

function CVEnglish() {
  const contactItems = [
    { icon: "", description: "caceresjuan.dev@gmail.com" },
    { icon: "", description: "+5493492513815" },
    { icon: "", description: "linkedin.com/in/caceresjuancruz" },
  ];

  const skillsItems = [
    {
      description:
        "Full Stack Web Development (HTML, CSS, Bootstrap, JavaScript, TypeScript, React, Next, Node )",
    },
    {
      description:
        "Databases (SQL, No SQL, SQL Server, MySQL, MongoDB, IPFS, Data modeling)",
    },
    {
      description: "Programming (Object Oriented, C#, .NET, MVC, API REST)",
    },
    {
      description:
        "Blockchain & Web3 (DApps, Solidity, Smart Contracts, Hardhat, Web3.js, Ethers.js, EVM)",
    },
    { description: "Office Package" },
  ];

  const languagesItems = [
    { description: "English (Conversational work)" },
    { description: "Native Spanish" },
    { description: "Basic Italian" },
    { description: "Basic Portuguese" },
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
        "Freelance website development for various clients, focusing the design on user acquisition, traffic conversion, simple and intuitive UX/UI, and prioritizing web optimization and SEO. Work done with technologies such as HTML, CSS, Bootstrap, JavaScript, React, Next, Node, CMS, etc.",
      date: "January 2022 - Present",
    },
  ];

  const educationItems = [
    {
      title: "Computer Engineering",
      description: "Universidad Católica de Santiago del Estero (Argentina)",
      date: "January 2019 - Present",
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
          <NavLink to="/portfolio">
            <button className="btn btn-dark mt-2">PORTFOLIO</button>
          </NavLink>
        </div>
        <h2 className="fs-3 mt-4 fw-bold border-bottom">Contact</h2>
        <ul>
          {contactItems.map((contactItem) => (
            <li className="fs-5">{contactItem.description}</li>
          ))}
        </ul>
        <h2 className="fs-3 mt-4 fw-bold border-bottom">Skills</h2>
        <ul>
          {skillsItems.map((skillItem) => (
            <li className="fs-5">{skillItem.description}</li>
          ))}
        </ul>
        <h2 className=" fs-3 mt-4 fw-bold border-bottom">Languages</h2>
        <ul>
          {languagesItems.map((languageItem) => (
            <li className="fs-5">{languageItem.description}</li>
          ))}
        </ul>
        <h2 className=" fs-3 mt-4 fw-bold border-bottom">Certifications</h2>
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
          Full Stack Web Developer | Computer Engineering Student | Blockchain &
          Web3
        </h3>

        <h4 className="">
          <ImLocation size={25} />
          Rafaela, Santa Fe, Argentina.
        </h4>
        <h2 className="mt-5 display-4">Experience</h2>
        <ul>
          {experienceItems.map((experienceItem) => (
            <li>
              <p className="fs-4 m-0">
                <b className="me-2">{experienceItem.title} | </b>
                {experienceItem.date}
              </p>
              <p className="fs-6">{experienceItem.description}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-5 display-4">Education</h2>
        <ul>
          {educationItems.map((educationItem) => (
            <li>
              <p className="fs-4 m-0">
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

export default CVEnglish;
