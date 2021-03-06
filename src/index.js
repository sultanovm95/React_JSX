// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("root"));

// Creating functions!
// const currentTime = new Date().getHours();

// function time(time) {
//   if (time >= 18) {
//     return "Good evening";
//   } else if (time >= 12) {
//     return "Good Afternoon";
//   } else if (time >= 0 && time < 12) {
//     return "Good Morning";
//   }
// }

// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "blue";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "Yellow";
// } else {
//   greeting = "Good Evening";
//   customStyle.color = "Dark Blue";
// }

// ReactDOM.render(
//   <div>
//     <h1 className="heading" style={customStyle}>
//       Hello Time is: {time(currentTime)}
//     </h1>
//   </div>,
//   document.getElementById("root")
// );

// adding style v2
// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };

// customStyle.color = "blue";

// ReactDOM.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
//   );

// adding style
// ReactDOM.render(
//   <h1 style={{color: "red"}}>Hello World!</h1>,
//   document.getElementById("root")
// )

// adding styles
// contentEditable allows to edit text inside page
// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true">
//       Uzbek National Food
//     </h1>

//     <div>
//       <img src="https://i.guim.co.uk/img/media/d76c98dea328db4b8f81f709a33089b1d850387a/0_39_2335_1401/master/2335.jpg?width=1020&quality=45&auto=format&fit=max&dpr=2&s=3684625d956f9cc550f49fdfa8ed80d5"></img>
//       <img src="https://i.pinimg.com/originals/ab/1f/76/ab1f76ff250de1dcb4ecd27ef3770025.jpg"></img>
//       <img src="https://i0.wp.com/travelcentre.com.au/wp-content/uploads/2019/11/UzbekFood.jpg?fit=770%2C578&ssl=1"></img>
//     </div>
//   </div>,
//   document.getElementById("intro")
// );

// practice
// const name = "SultanovM";
// const currentDate = new Date();
// const year = currentDate.getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Created by {name}</p>
//     <p>Copyright {year}</p>
//   </div>,
//   document.getElementById("root"));

// expressions
// const name ="SultanovM95";
// const num = 19;
// You can not create statement [logic]
// ReactDOM.render(
//   <div>
//     <h1>Created by user {name + " " + num}!</h1>
//     <p>Your fav number is {(num * 2)/2}</p>
//     <p>Random number is {Math.floor(Math.random()*10)}</p>
//   </div>,
//   document.getElementById("root"));

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// Alternative method to create element
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);

// Adding more elements
// ReactDOM.render(
//   <div>
//     <ul>
//       <li>Marketplace</li>
//       <li>Insurance</li>
//       <li>Instamoov</li>
//     </ul>
//   </div>,
//   document.getElementById("intro")
// );
