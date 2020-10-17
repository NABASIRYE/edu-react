import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        const closeMenu=()=>{
            document.querySelector(".sidebar").classList.remove("open");
          }
        return (
            <React.Fragment>
             
                <aside className="sidebar">
      <h2>EDU-QUESTIONS</h2>
      <button className="sidebarclosebutton" onClick={closeMenu}>X</button>
     <div>
     <ul>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link></li>
       <li><Link to="">ABOUT</Link></li>
       <li><Link to="">ALL QUESTIONS</Link ></li>
     </ul>
     </div>
    </aside>
    
            </React.Fragment>
        )
    }
}

