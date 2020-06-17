import React, { Component } from 'react';
import { Link } from 'gatsby'
import "materialize-css/dist/css/materialize.min.css";






if (typeof window !== 'undefined') {
  require('materialize-css/dist/js/materialize.min.js')
}

class Header extends Component {

  componentDidMount() {
    const elem = document.querySelector('.sidenav')
    window.M.Sidenav.init(elem, {})
  }


  render() {
    return (
    <div className="">
        <div className="navbar-fixed" style={{ height: "8vh", marginBottom: '10px' }}>
          <nav className=" teal">
            <div className="nav-wrapper"
            >
              <Link to='/'

              >
                The Hope Barometer
            </Link>

              <a
                href="/"
                data-target="mobile-demo"
                className="sidenav-trigger right"
              >
                <i className="material-icons">menu</i>
              </a>
              <div className="right">
                <ul className=" hide-on-med-and-down row-flex">
                  <li>
                    <Link to='/about/'>About</Link>
                  </li>
                  <li>
                    <Link to='/survey/'>Survey</Link>
                  </li>
                  <li>
                    <Link to='/results/'>Results</Link>
                  </li>
                  <li>
                    <Link to='/blog/'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact/'>Contact</Link>
                  </li>
                </ul>
              </div>
          
            </div>
         
          </nav>
       
        </div>
        <ul class="sidenav" id="mobile-demo">
        <li>
                    <Link to='/about/'>About</Link>
                  </li>
                  <li>
                    <Link to='/survey/'>Survey</Link>
                  </li>
                  <li>
                    <Link to='/results/'>Results</Link>
                  </li>
                  <li>
                    <Link to='/blog/'>Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact/'>Contact</Link>
                  </li>
  </ul>
        </div>
    


    );
  }
}


export default Header;
