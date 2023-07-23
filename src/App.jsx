import { useState } from "react";
import Home from "./moduls/Home/home";
import "./App.css";
import Challenge from "./moduls/challenge4/challenge.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ overflowY: "scroll" }}>
      {/* 1 */}
      <Home />
      {/* 4 */}
      <Challenge />
    </div>
  );
}

export default App;
