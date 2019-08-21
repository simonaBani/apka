import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggleNavbarColapse" aria-controls="toggleNavbarColapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
           
        <div className="collapse navbar-collapse"  id="toggleNavbarColapse">
          
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add todo
              </Link>
            </li>
          
          </ul>
        </div>
        
      </nav>
    )
  }
}

export default Navbar
