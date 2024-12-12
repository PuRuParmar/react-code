        import React from "react";
        import ReactDOM from "react-dom/client";
        const reactHeading = React.createElement("h1",{id : "rootElement"},
            React.createElement("h2",{id:"rootElement2"},
              [[React.createElement("h3",{id:"root3"},"Im h3"),"I'm inside h2"],[React.createElement("h3",{id:"root3"},"Im h3"),"I'm inside h2"]]));
        const react_root = ReactDOM.createRoot(document.getElementById("react-root"));
        react_root.render(reactHeading);
     
