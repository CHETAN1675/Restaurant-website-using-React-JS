import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import './App.css'
import { Fragment } from "react"
import Cart from "./components/Cart/Cart";


function App() {
  return(
    <div className="body">
      <Cart/>
     <Header />
    <main>
      <Meals />
    </main>
    </div>
    
  );
}

export default App
