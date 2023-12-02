import React from 'react'
import ReactDOM from 'react-dom/client'
import FoodFireLogo from './images/FoodFireLogo.png'

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 * - Restaurant Card
 *   - Img
 *   - Name of Res , Star Rating ,cuisines , delivery time
 * 
 * Footer
 * - Copyright 
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return(
        <div className='header'>
            <section>
            <img src={FoodFireLogo}  width="120px"/>
            </section>
            <section>
                <ul className='navList'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </section>
            
        </div>
    )
}


const styleCard =  {
    backgroundColor : "#172032"
}

const RestaurantCard = () => {
    return (
        <div className='res-card'  style={
            {
                backgroundColor : "#172032"
            }
        }>
            <img style={{width:"98%",height:"50%"}} alt='img' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y7yu5qxijytwanxnozzr'/>
            <h3>Meghna Foods</h3>
            <h4>Biryani, North Indian , Asian</h4>
            <h4>4.3 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
// Todo: Search
const Body = () => {
    return(
        <div className='body'>
            <section className='search'>Search</section>
            {/* restaurant Cards */}
            <section className='res-container'>
                <RestaurantCard/>
            </section>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

console.log(AppLayout);
//! jdjkdj
// Todo:jfjdfjk
// Todo

