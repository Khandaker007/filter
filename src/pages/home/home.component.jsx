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
      <WhatWeDo />
      <WeCollect />
      <WeProvide />
      <Campaigns />
      <Achievements />
    </div>
  );
}

export default Home;
