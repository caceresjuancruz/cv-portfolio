import React, { Fragment } from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaBriefcase,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import Header from "./Header";

function CVEnglish() {
  const contactItems = [
    { icon: "", description: "caceresjuan.dev@gmail.com" },
    { icon: "", description: "+5493492513815" },
    { icon: "", description: "linkedin.com/in/caceresjuancruz" },
    { icon: "", description: "Nationality: Argentina / Italian" },
  ];

  const skillsItems = [
    {
      description:
        "Front End Web Development (HTML, CSS, Bootstrap, Tailwind, JavaScript, React.js, Next.js)",
    },
    {
      description:
        "Back End Web Development (API REST, MVC, C#, .NET Framework, ASP .NET CORE, Entity Framework, TypeScript, Nest.js, Node.js, Express.js, Prisma)",
    },
    {
      description:
        "Databases (SQL, No SQL, SQL Server, MySQL, MongoDB, Oracle, Data modeling)",
    },
    {
      description:
        "Blockchain & Web3 (DApps, Solidity, Smart Contracts, HardHat, Web3.js, Ethers.js, IPFS)",
    },
    { description: "Git, GitHub, GitLab, Trello, Scrum, Jira" },
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
      description: "JSMastery PRO Ultimate Next.js 14 Course",
      credential: "https://certificate.jsmastery.pro/verify/4aaec6a910546",
    },
    {
      description: "EF SET English Certificate 75/100 (C2 Proficient)",
      credential: "https://www.efset.org/cert/Ddcams",
    },
  ];

  const experienceItems = [
    {
      title: "Software Developer",
      company: "Folder IT",
      description:
        "Full-stack web development with technologies such as React.js, Next.js, Nest.js, Prisma, PostgreSQL.",
      date: "November 2023 - Present",
    },
    {
      title: "Back End Developer",
      company: "MEGATONE",
      description:
        "C# .NET Framework and .NET Core API Development and maintenance, Entity Framework, Management of SQL Server and SSMS. Desktop applications development with WinForms. Scalability, architecture, analysis, optimization and implementation of new systems.",
      date: "March 2023 - November 2023",
    },
    {
      title: "Full Stack Web Developer",
      company: "FREELANCE",
      description:
        "Freelance website development, focusing the design on user acquisition, traffic conversion, simple and intuitive UX/UI, and prioritizing web optimization and SEO. Work done with technologies such as HTML, CSS, Bootstrap, JavaScript, React, Next, Node, CMS, etc.",
      date: "January 2022 - March 2023",
    },
  ];

  const educationItems = [
    {
      title: "Full Stack Web Development",
      description: "Self-taught",
      date: "",
    },
    {
      title: "Computer Engineering Degree",
      description: "Universidad Católica de Santiago del Estero (Argentina)",
      date: "January 2019 - Present",
    },
    {
      title: "High School Degree in Computer Science",
      description: "San José College Rafaela (Argentina)",
      date: "2014 - 2018",
    },
  ];

  return (
    <Fragment>
      <Header />
      <div className="row p-0 m-0">
        <div className="col col-md-3 border-end" id="col-desktop">
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
              href="https://api.whatsapp.com/send?phone=5493492513815"
              target="_BLANK"
              rel="noreferrer"
            >
              <FaWhatsappSquare size={40} />
            </a>
          </div>
          <div className="text-center">
            {/* <NavLink to="/portfolio">
              <button className="btn btn-dark mt-2 me-1">PORTFOLIO</button>
            </NavLink> */}
            <button className="btn btn-dark mt-2 ms-1">
              <a
                className="text-white"
                href="CVENG_JuanCruzCaceres.pdf"
                download=""
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                DOWNLOAD CV
              </a>
            </button>
          </div>
          <h2 className="fs-3 mt-4 fw-bold border-bottom">
            About Me / Contact
          </h2>
          <ul>
            {contactItems.map((contactItem, index) => (
              <li className="fs-5 text-break" key={index}>
                {contactItem.description}
              </li>
            ))}
          </ul>
          <h2 className="fs-3 mt-4 fw-bold border-bottom">Skills</h2>
          <ul>
            {skillsItems.map((skillItem, index) => (
              <li className="fs-5" key={index}>
                {skillItem.description}
              </li>
            ))}
          </ul>
          <h2 className=" fs-3 mt-4 fw-bold border-bottom">Languages</h2>
          <ul>
            {languagesItems.map((languageItem, index) => (
              <li className="fs-5" key={index}>
                {languageItem.description}
              </li>
            ))}
          </ul>
          <h2 className=" fs-3 mt-4 fw-bold border-bottom">Certifications</h2>
          <ul>
            {certificationsItems.map((certificationsItem, index) => (
              <li className="fs-5" key={index}>
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
        <div className="col col-md-9 px-4" id="col-main">
          <div className="align-items-center mb-2 profile-container">
            <div className="text-center">
              <img
                className="img rounded-circle border profile-img"
                style={{ maxWidth: "10rem", filter: "grayscale(100%)" }}
                src="perfil_cuadrada.png"
                alt="Profile"
              />
            </div>
            <h1 className="display-1 fw-bold">Juan Cruz Cáceres</h1>
          </div>
          <h3 className="fw-light fs-2">
            Full Stack Web Developer | Computer Engineering | Blockchain & Web3
          </h3>

          <h4 className="">
            <ImLocation size={25} />
            Rafaela, Santa Fe, Argentina.
          </h4>
          <div id="buttons-mobile">
            <div className="text-center mt-3" id="icons-mobile">
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
                href="https://api.whatsapp.com/send?phone=5493492513815"
                target="_BLANK"
                rel="noreferrer"
              >
                <FaWhatsappSquare size={40} />
              </a>
            </div>
            <div className="text-center">
              {/* <NavLink to="/portfolio">
                <button className="btn btn-dark mt-2 me-1">PORTFOLIO</button>
              </NavLink> */}
              <button className="btn btn-dark mt-2 ms-1">
                <a
                  className="text-white"
                  href="CVENG_JuanCruzCaceres.pdf"
                  download=""
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </div>
          <h2 className="mt-4 display-4 d-flex">
            Experience{" "}
            <div className="border-bottom my-auto h-25 w-100 mx-2"></div>
          </h2>
          <ul>
            {experienceItems.map((experienceItem, index) => (
              <li key={index}>
                <p className="fs-4 m-0">
                  <b className="me-2">{experienceItem.title} | </b>
                  {experienceItem.date}
                </p>
                <p className="fs-5 m-0 d-flex gap-2 align-items-start">
                  <FaBriefcase size={25} />
                  {experienceItem.company}
                </p>
                <p className="fs-6">{experienceItem.description}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-5 display-4 d-flex">
            Education{" "}
            <div className="border-bottom my-auto h-25 w-100 mx-2"></div>
          </h2>
          <ul>
            {educationItems.map((educationItem, index) => (
              <li key={index}>
                <p className="fs-4 m-0">
                  <b className="me-2">{educationItem.title} | </b>{" "}
                  {educationItem.date}
                </p>
                <p className="fs-6">{educationItem.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-md-3 border-end px-4" id="col-mobile">
          <div id="buttons-desktop">
            <div className="text-center" id="icons-mobile">
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
                href="https://api.whatsapp.com/send?phone=5493492513815"
                target="_BLANK"
                rel="noreferrer"
              >
                <FaWhatsappSquare size={40} />
              </a>
            </div>
            <div className="text-center">
              {/* <NavLink to="/portfolio">
                <button className="btn btn-dark mt-2 me-1">PORTFOLIO</button>
              </NavLink> */}
              <button className="btn btn-dark mt-2 ms-1">
                <a
                  className="text-white"
                  href="CVENG_JuanCruzCaceres.pdf"
                  download=""
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </div>
          <h2 className="fs-3 mt-4 fw-bold border-bottom">
            About Me / Contact
          </h2>
          <ul>
            {contactItems.map((contactItem, index) => (
              <li className="fs-5 text-break" key={index}>
                {contactItem.description}
              </li>
            ))}
          </ul>
          <h2 className="fs-3 mt-4 fw-bold border-bottom">Skills</h2>
          <ul>
            {skillsItems.map((skillItem, index) => (
              <li className="fs-5" key={index}>
                {skillItem.description}
              </li>
            ))}
          </ul>
          <h2 className=" fs-3 mt-4 fw-bold border-bottom">Languages</h2>
          <ul>
            {languagesItems.map((languageItem, index) => (
              <li className="fs-5" key={index}>
                {languageItem.description}
              </li>
            ))}
          </ul>
          <h2 className=" fs-3 mt-4 fw-bold border-bottom">Certifications</h2>
          <ul>
            {certificationsItems.map((certificationsItem, index) => (
              <li className="fs-5" key={index}>
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
          <div id="buttons-mobile">
            <div className="text-center" id="icons-mobile">
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
                href="https://api.whatsapp.com/send?phone=5493492513815"
                target="_BLANK"
                rel="noreferrer"
              >
                <FaWhatsappSquare size={40} />
              </a>
            </div>
            <div className="text-center mb-3">
              {/* <NavLink to="/portfolio">
                <button className="btn btn-dark mt-2 me-1">PORTFOLIO</button>
              </NavLink> */}
              <button className="btn btn-dark mt-2 ms-1">
                <a
                  className="text-white"
                  href="CVENG_JuanCruzCaceres.pdf"
                  download=""
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </div>
        </div>
        <style jsx="true">
          {`
            .profile-container {
              display: block;
              gap: 0;
              text-align: center;
            }

            #buttons-desktop {
              display: none;
            }

            #buttons-mobile {
              display: block;
            }

            #icons-mobile {
              margin-top: 2rem;
            }

            #col-desktop {
              display: none;
            }

            #col-mobile {
              display: inline;
            }

            #col-desktop,
            #col-mobile,
            #col-main {
              padding-left: 2rem;
              padding-right: 2rem;
            }
            @media (min-width: 576px) {
              .profile-container {
                display: flex;
                gap: 1rem;
              }

              #buttons-desktop {
                display: block;
              }

              #buttons-mobile {
                display: none;
              }

              #col-desktop {
                display: inline;
              }

              #col-mobile {
                display: none;
              }

              #col-desktop,
              #col-mobile,
              #col-main {
                padding-left: 2rem;
                padding-right: 2rem;
              }
            }
          `}
        </style>
      </div>
    </Fragment>
  );
}

export default CVEnglish;
