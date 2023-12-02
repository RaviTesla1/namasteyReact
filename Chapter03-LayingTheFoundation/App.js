import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1",{id:"heading"}, "Namaste React🚀");

// JSX (transpiled before it goes to browser)
const jsxheading = <h1 className='head'>Namaste React🚀 from jsx</h1>;

const number = 10000;

// Functional component

const Title = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>I Love my India</p>
            <h3>{console.log("consoled")}</h3>
        </div>
    )
}

const HeadingComponent = () => {
    return (
       <div>
         <h1>Functional Component</h1>
        <Title/>
        {Title()}
        <h2>{number}</h2>
        {jsxheading}
       </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

console.log(HeadingComponent);

