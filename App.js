import React from "react";
import ReactDOM from "react-dom/client";

//React create ELement ->object ->HTML
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child_1" }, [
//     React.createElement("h1", { key: "FC1" }, "I am first child"),
//     React.createElement("h2", { key: "FC2" }, "I am second child"),
//   ]),
//   React.createElement("div", { id: "child_2" }, [
//     React.createElement("h1", { key: "FC1" }, "I am first child"),
//     React.createElement("h2", { key: "FC2" }, "I am second child"),
//   ]),
// ]);

//JSX at the end of the day React element
const heading = (
  <h1 id="heading" className="head ">
    This is a JSX Element
  </h1>
);

const elem = <span>This is a span element</span>;

const Title = function () {
  return <h2>This is a title component</h2>;
};
//React functional component
// const HeadingComponent = () => (
//   (<h1>Hiiiiiiiii, React Functional component</h1>), (<h2>React sss</h2>)
// );
// const HeadingComponent = () => (
//   <div>
//     <h1>Hello React functional component</h1>
//   </div>
// );

const HeadingComponent = () => (
  <div id="container">
    <h1>Hello React functional component</h1>
    {1 + 1}
    <Title />
    {elem}
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
