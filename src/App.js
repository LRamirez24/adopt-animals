import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return React.createElement("div", { id: "something-important" }, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "German Shepherd",
        }),
        React.createElement(Pet, {
            name: "Pearl",
            animal: "Dog",
            breed: "Black Labrador Retriever",
        }),
        React.createElement(Pet, {
            name: "Phoenix",
            animal: "Dog",
            breed: "Mixed",
        }),
    ]);
};

render(React.createElement(App), document.getElementById("root"));