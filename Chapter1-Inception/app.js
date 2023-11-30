// Rendering Element using Javascript 


const heading = React.createElement("h1",{id:"title" ,xyz: "roger"},"Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
             
root.render(heading);