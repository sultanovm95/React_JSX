// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
// Alternative method to create element
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);

ReactDOM.render(
  <div>
    <h2>Welcome to Neurofax-B</h2>
    <p>Best Service since 1995</p>
  </div>,
  document.getElementById("intro")
);
