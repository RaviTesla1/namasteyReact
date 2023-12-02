# Chapter 03 : Laying The Foundation 

When we render the react create element on the dom then it becomes the html before it was object
***
JSX is not part of React .
We can also build the big react app even without using JSX.
But JSX makes developer's life easy .
JSX merge HTML and Js

JSX is not HTML but it is like HTML or XML 

JSX code is transpiled then it goes to browser
***

React.createElement creates js object and when it renders to browser it converts to HTML element 
***

JSX converted to React.createElement and it converts js object and when it renders to browser it converts to HTML element .
***

Babel converts JSX code into React.createElement
***

### Hence at the end of the day JSX is React.createElement
***

we need to use camelCase to give attributes in JSX .
***

Q : What is functional component ?
A : It is a normal Javascript function which returns JSX or return a React Element or nested React Element.
***


**Eg : React  Functional component**


```javascript
javascript
const HeadingComponent = () => {
    return (
        <h1>Functional Component</h1>
    )
}
```

### React Element 

```Javascript
const heading = <h1>Hello World </h1>
```
### We cannot render functional component like this

```Javascript
// Functional component

const HeadingComponent = () => {
    return (
        <h1>Functional Component</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeadingComponent);
```
### How to render functional component .

```Javascript
root.render(<HeadingComponent/>);
```

### **In functional component using**
 > curly braces { }
 ### **we can write any piece of JavaScript**

 ## How to add javascript in JSX

 ```Javascript
 const number = 10000;

// Functional component

const HeadingComponent = () => {
    return (
       <div>
         <h1>Functional Component</h1>
        <Title/>
        <h2>{number}</h2>
       </div>
    )
}
 ```
 > Addition : <h1>{number + 12}</h2>
 
 # **Console statement in Funcitional component**

 ```javascript
 const Title = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>I Love my India</p>
            <h3>{console.log("consoled")}</h3>
        </div>
    )
}

 ```

 ## How to add React Element in functional component

 ```javascript
 const jsxheading = <h1 className='head'>Namaste React🚀 from jsx</h1>;

const number = 10000;

// Functional component

const HeadingComponent = () => {
    return (
       <div>
         <h1>Functional Component</h1>
        <Title/>
        <h2>{number}</h2>
        {jsxheading}
       </div>
    )
}
 ```

Suppose we are getting some data form api and api is sending some malicious data and you are the user and i am the developer of this code  and you are using this app on your system , i can (steal) read cookies , local storage or session storage and these types of attacks are  known as **cross side scripting attacks**
But JSX is so amazing that it takes cares of these injection attacks .
Suppose even this api pass some malicious data then JSX will escape it . 
If data is wrrapped inside curly braces then JSX will not blindly run it .
Hence JSX prevents **cross side scripting attacks**
But browser doesn't run the code blindly it sanitize the data before running on the browser .
 ```javascript
 const data = api.data();

 const HeadingComponent = () => {
    return (
       <div>
         <h1>Functional Component</h1>
        <Title/>
        <h2>{data}</h2>
       </div>
    )
}
 ```

 We can also like component in this way too . Here title is a component .

 ```javascript
 // Functional component

const HeadingComponent = () => {
    return (
       <div>
        <Title></Title>
        <h2>{number}</h2>
       </div>
    )
}
 ```

 ## We can call a component like a normal javascript function using paranthesis in curly braces likely :
 > { add() }

 ```javascript
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
        // Here title works like a function
        {Title()}
        <h2>{number}</h2>
        {jsxheading}
       </div>
    )
}
 ```

 ## Three ways to call a component 

 ```javascript
 <Title/>
 <Title></Title>
 { Title() } 
 ```


