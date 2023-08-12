import React, { useState, useReducer } from "react";
import Home from "./moduls/Home/home";
import "./App.css";
import Challenge from "./moduls/challenge4/challenge.jsx";
import { MyContext, reducer, initialState } from "./contextApi/my-context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div style={{ overflowY: "scroll" }}>
        {/* All chanlenges are completed in this */}
        <Home />
        {/* 4 */}
        {/* <Challenge /> */}
      </div>
    </MyContext.Provider>
  );
}

export default App;
