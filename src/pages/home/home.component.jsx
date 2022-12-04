import React from "react";

// COMPONENTS
import Hero from "../../components/sections/hero/hero.component";
import WhatWeDo from "../../components/sections/whatWeDo/whatWeDo.component";
import WeCollect from "../../components/sections/weCollect/weCollect.component";
import WeProvide from "../../components/sections/weProvide/weProvide.component";
import Campaigns from "../../components/sections/campaigns/campaigns.component";
import Achievements from "../../components/sections/achievements/achievements.component";

import AOS from "aos";
import "aos/dist/aos.css";

// STYLES
import "./home.style.scss";
import { useEffect } from "react";

function Home(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="home">
      <Hero />
      <div id="about"></div>
      <WhatWeDo />
      <div id="services"></div>
      <WeCollect />
      <WeProvide />
      <div id="campaigns"></div>
      <Campaigns />
      <div id="achievements"></div>
      <Achievements />
    </div>
  );
}

export default Home;
