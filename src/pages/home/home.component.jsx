import React from "react";

// COMPONENTS
import Hero from "../../components/sections/hero/hero.component";
import WhatWeDo from "../../components/sections/whatWeDo/whatWeDo.component";
import WeCollect from "../../components/sections/weCollect/weCollect.component";
import WeProvide from "../../components/sections/weProvide/weProvide.component";
import Campaigns from "../../components/sections/campaigns/campaigns.component";
import Achievements from "../../components/sections/achievements/achievements.component";

// STYLES
import "./home.style.scss";

function Home(props) {
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
