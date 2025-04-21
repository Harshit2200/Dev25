import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child_1" }, [
    React.createElement("h1", { key: "FC1" }, "I am first child"),
    React.createElement("h2", { key: "FC2" }, "I am second child"),
  ]),
  React.createElement("div", { id: "child_2" }, [
    React.createElement("h1", { key: "FC1" }, "I am first child"),
    React.createElement("h2", { key: "FC2" }, "I am second child"),
  ]),
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
