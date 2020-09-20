import React, { useState } from "react";
import Home from "views/Home";

const App = () => {

  // const fetchAllTiles = async () => {
  //   const response = await fetch("https://backendapi-sb65j6bcyq-uc.a.run.app/tiles", {
  //       method: "GET",
  //     }).then(response => response.json());
  //   return response;
  // };

  return (
    <div className="App">

      <h1>Pee lmao</h1>

      <Home />
    </div>
  );
};

export default App;
