import React, { Component } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './SignUp'
export default class Navbar extends Component {
   
    render() {
        const openMenu=()=>{
            document.querySelector(".sidebar").classList.add("open");
          }

          const closeMenu=()=>{
            document.querySelector(".sidebar").classList.remove("open");
          }
          
        return (
            <Router>
                <header className="header">
      <div className="logo">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <h1>EDU STACK OVERFLOW</h1>
      </div>
      <div className="signlinks"> 
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      {/* <button className="loinbutton" onClick={login}>Signin</button>
        <button className="signupButton" onClick={signup}> Sign Up</button> */}
         
      </div>  
    </header> 
    <aside className="sidebar">
      <h2>EDU-QUESTIONS</h2>
      <button className="sidebarclosebutton" onClick={closeMenu}>X</button>
     <div>
     <ul>
       <li><Link to="/">HOME</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
     </ul>
     </div>
    </aside>
    <Switch>
    <Route path exact='/'><Home/></Route>
      <Route path='/login'><Login/></Route>
      <Route path='/signup'><Signup/></Route>
      
    </Switch>
            </Router>
        )
    }
}
