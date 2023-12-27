// What
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("h1", {
        id: "heading"
    }, "Himanshu Rana here"),
    React.createElement("p", {}, "learning pure react")
]);
// where
const root = ReactDOM.createRoot(document.getElementById("root"));
// put what into where
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
