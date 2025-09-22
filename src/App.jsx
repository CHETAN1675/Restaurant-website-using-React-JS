import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import './App.css'


function App() {

const [cartIsShown,setCartIsShown] =useState(false)

const shownCartHandler = ()=>{
  setCartIsShown(true)
}

const hideCartHandler = () =>{
  setCartIsShown(false)
}

  return(
    <div className="body">
      {cartIsShown && <Cart onClose={hideCartHandler} />}
     <Header onShowCart={shownCartHandler}/>
    <main>
      <Meals />
    </main>
    </div>
    
  );
}

export default App
