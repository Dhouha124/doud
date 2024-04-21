import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Service} from "./components/service";
import { About} from "./components/defunt";

import { GestionDesBiens} from "./components/biens";
import { GestionDesOrganes} from "./components/organes";
import {GestionAlveoles } from "./components/alveole";

import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Service data={landingPageData.Service} />
      <About data={landingPageData.About} />
     
      <GestionDesBiens data={landingPageData.GestionDesBiens} />
      
      <GestionDesOrganes data={landingPageData.GestionDesOrganes}/>
      <GestionAlveoles data={landingPageData.GestionAlveoles} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
