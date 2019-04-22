const createElement = require('./lesson_1/createElement');
const render = require('./lesson_1/render');

const ReactDOM = {
    createElement,
    render
};

const app = ReactDOM.createElement(
    "div",
    { style: { backgroundColor: "red" } },
    [
        ReactDOM.createElement("span", undefined, "Hello world"),
        ReactDOM.createElement("br"),
        "This is just a test node",
        ReactDOM.createElement("div", { textContent: "Text content" })
    ]
);

ReactDOM.render(app, document.getElementById("app"));
