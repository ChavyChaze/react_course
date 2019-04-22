// const createElement = (type, props, children) => {
//   let propsKey = null,
//     finalKey = null,
//     finalString = null;
//     console.log(children)
//   if (props !== undefined && props !== null) {
//     let keys = Object.keys(props);

//     keys.forEach(key => {
//       if (typeof props[key] === "object") {
//         propsKey = props[key];
//         finalKey = Object.keys(props[key]);

//         for (let el in propsKey) {
//           finalString =
//             (finalKey[0] === "backgroundColor"
//               ? "background-color"
//               : finalKey[0]) +
//             ":" +
//             propsKey[el] +
//             ";";
//           console.log(
//             `<${type} ${key}="${finalString}">${
//               children ? children : ""
//             }</${type}>`
//           );

//           return `<${type} ${key}="${finalString}">${
//             children
//               ? children.forEach(i =>
//                   children[i] !== undefined ? children[i] : ""
//                 )
//               : ""
//           }</${type}>`;
//         }

//         return `<${type} ${key}="${propsKey[0]}">${
//           children ? children : ""
//         }</${type}>`;
//       }
//     });
//   }
// console.log(children);
//   return `<${type}>${children ? children : ""}</${type}>`;
// };

const createElement = (tagName, props, children) => {
    const mainDiv = document.getElementsByTagName("div")[0];
    let my_div = null,
        text = null;
    const newDiv = document.createElement(tagName);
    if (props && props.style) {
        const css =
            "div" + // body, span
            JSON.stringify(props.style)
                .replace(/"/g, "")
                .replace("C", "-c")
                .replace("red", "red;"),
            style = document.createElement("style");
        mainDiv.appendChild(style);
        style.type = "text/css";
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
            document.body.insertBefore(style, mainDiv);
        }
    }
    if (props && props.textContent) {
        text = document.createElement(tagName);
        text.textContent = props.textContent;
        document.body.insertBefore(text, my_div);
    }
    newDiv.innerHTML = children ? children : "";
    document.body.insertBefore(newDiv, my_div);
};

module.exports = createElement;