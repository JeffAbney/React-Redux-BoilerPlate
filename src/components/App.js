import React, { Component } from "react";
import ConnectedComponent from "./ConnectedComponent.js";


const App = () => (
  <div className="row mt-5">
	<div className="col-md-4 offset-md-1">
	  <h2>Hello There!</h2>
	  <ConnectedComponent />
	</div>
  </div>
);

export default App;