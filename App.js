import React from "react";
import ReactDOM from "react-dom/client";

const heading= React.createElement("h1",{},"Namaste Everyone");
const heading1= React.createElement("h2",{},"chlo shuru krte h");
const heading2= React.createElement("div",{},[heading,heading1]);
console.log(heading2);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading2);