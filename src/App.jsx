import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals";
import './App.css'
import { Fragment } from "react"

function App() {
  return(
    <div className="body">
     <Header />
    <main>
      <Meals />
    </main>
    </div>
    
  );
}

export default App
