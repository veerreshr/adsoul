import React from "react";
import AppList from "../components/AppList";
import Intro from "../components/Intro";

function HomeScreen() {
  return (
    <div className="homescreen-container">
      <Intro />
      <AppList />
    </div>
  );
}

export default HomeScreen;
