import React from "react";
import Topbar from "../Components/Share/navbar";
import CardSlider from "../Components/Share/CardSlider";

export default function Home() {
  return (
    <div>
      <Topbar show="true" />
      
        <h1 className="homeText cinzelBold mb-0 py-5 text-center mb-0 pb-0">
          <span>we work in the dark, to serve the light</span> <br />
          <span className="mt-2">we Are</span>
        </h1>
        <div className="cinzelBold assassins mt-0 pt-0">
          <h1>
            <span className="large">A</span>
            <span className="small">ssassin'</span>
            <span className="large">s</span>
          </h1>
        </div>
      
      <CardSlider show="true" />
    </div>
  );
}
