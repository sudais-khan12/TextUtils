import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  let changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        about="About"
        mode={mode}
        changeMode={changeMode}
      />
      <div className="container my-5">
        <TextForm heading="Transform Your Text" mode={mode} />
      </div>
      {/* <div className="container" mode={mode}>
        <Info />
      </div> */}
    </>
  );
}

export default App;
