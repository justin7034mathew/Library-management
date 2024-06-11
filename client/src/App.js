import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";


const App = () => {

    return (
      <BrowserRouter>
        <div className="header">
           <Navbar />
           <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/books" Component={Books}/>
          </Routes> 
        </div>
        </BrowserRouter>         
    )
}

export default App