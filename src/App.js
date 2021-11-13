import React from "react";
import { Landing } from "./containers/Landing";
import { About } from "./containers/About";
import "./App.less";

export default function App() {
  return (
    <>
      <Landing />
      <About />
    </>
  );
}
