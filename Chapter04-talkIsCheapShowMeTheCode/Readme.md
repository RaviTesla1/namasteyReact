# Chapter 1 : Talk is cheap show me the code

Q : How to give style using javaScript objects ?

```javascript
const styleCard =  {
    backgroundColor : "#172032",
}

const RestaurantCard = () => {
    return (
        <div className='res-card'  style={styleCard}>
            <h3>Meghna Foods</h3>
        </div>
    )
}
```

**OR**

```javascript


const RestaurantCard = () => {
    return (
        <div className='res-card'  style={{
            const styleCard =  {
       backgroundColor : "#172032",
}
        }}>
            <h3>Meghna Foods</h3>
        </div>
    )
}
```

