import React, { Fragment } from "react";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";

function Portfolio() {
  const works = [
    {
      title: "Estudio de Danzas Web",
      description: "Website for 'Estudio de Danzas Viviana Musso'",
      stack: "HTML, CSS, Bootstrap, JavaScript, React",
      link: "https://estudiodedanzasvivianamusso.com/",
      repo: "https://github.com/caceresjuancruz/estudiodanzas-react",
    },
    {
      title: "Optica Merlo Web",
      description: "Website for the company 'Optica Merlo'",
      stack: "HTML, CSS, Bootstrap, JavaScript",
      link: "https://opticamerlo.com.ar/",
      repo: "",
    },
    {
      title: "CRUD React",
      description: "Basic CRUD with ReactJS",
      stack: "HTML, CSS, JavaScript, React",
      link: "https://crud-react-steel.vercel.app/",
      repo: "https://github.com/caceresjuancruz/CRUD-React",
    },
    {
      title: "CRUD C# .NET",
      description:
        "ASP.NET Core MVC C♯ Basic CRUD Web Api with EntityFramework & SQL Server",
      stack: "C#, .NET, SQL Server",
      link: "",
      repo: "https://github.com/caceresjuancruz/CRUD-MVC-API",
    },
  ];

  return (
    <Fragment>
      <NavLink to="/">
        <button className="btn btn-dark p-0 m-2">
          <GoArrowLeft size={30} />
        </button>
      </NavLink>
      <div className="col-main">
        <h1 className="display-1 fw-bold">Portfolio</h1>
        <ul className="list-unstyled">
          {works.map((work, index) => (
            <li key={index} className="border-bottom mt-4">
              <h3 className="mb-0 fw-bold fs-1">{work.title}</h3>
              <p className="mb-0">{work.description}</p>
              <p className="mb-0">
                <b>
                  <u>Technologies:</u> {work.stack}
                </b>
              </p>
              <a
                href={work.repo}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                GitHub
              </a>
              {" | "}
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                View
              </a>
            </li>
          ))}
        </ul>
        <style jsx="true">{`
          .col-main {
            padding-left: 1rem;
            padding-righ: 1rem;
          }

          @media (min-width: 576px) {
            .col-main {
              padding-left: 3rem;
              padding-righ: 3rem;
            }
          }
        `}</style>
      </div>
    </Fragment>
  );
}

export default Portfolio;
