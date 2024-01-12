// heading to display in browser way to use javascript.

// const heading = document.createElement("h1");
// heading.innerHTML = "hello everyone";
// const root = document.getElementById("root"); 
// root.appendChild(heading); 

// react


const list = React.createElement(
    "li",
    { id: "home" },
    "Home"
);

const list2 = React.createElement(
    "li",
    { id: "about" },
    "About"
);

const list3 = React.createElement(
    "li",
    { id: "contact" },
    "Contact Us"
);

const container = React.createElement(
    "ul",
    { id: "container" },
    [list, list2, list3]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
