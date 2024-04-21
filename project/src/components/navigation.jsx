import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
           AdminMedico
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#Service" className="page-scroll">
               Services
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
              Enregistrer décès
              </a>
            </li>
            <li>
            <a href="#GestionDesBiens" className="page-scroll">
              biens
              </a>
              
            </li>
            <li>
            <a href="#GestionDesOrganes" className="page-scroll">
                organes
              </a>
            
            </li>
            <li>
            <a href="#GestionAlveoles" className="page-scroll">
                Alveoles
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                examen medico
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
