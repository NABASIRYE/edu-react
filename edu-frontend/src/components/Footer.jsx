import React from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom'
export default function Footer() {
    return (
        <Router>
            <footer className="footer">
      <p>&copy; GROUP KIA 2020</p>
      <Link to="#">Questions</Link>
    </footer>
     
        </Router>
    )
}
