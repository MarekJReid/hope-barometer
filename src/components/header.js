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
          <nav className=""
          style={{
            boxShadow: `none`,
            background: `white`
          }}>
            <div className="nav-wrapper z-depth--1"
            style={{
            padding: `0 2rem`
            }}
            >
              <Link to='/'

              >
               <h5
               style={{
                 margin: `0`,
                 padding: `.75rem`,
                 fontSize: `2rem`,
                 display: `inline-block`,
                 color: `#0d6989`
               }}
               >The Hope Barometer</h5> 
            </Link>

              <a
                href="/"
                data-target="mobile-demo"
                className="sidenav-trigger right"
              >
                <i className="material-icons">menu</i>
              </a>
              <div className="right"
              style={{
                margin: `0`,
                 padding: `0`
              }}>
                <ul className=" hide-on-med-and-down row-flex"
                  style={{
                    color: `#0d6989`
                  }}>
                  <li
                  style={{
                    color: `black`
                  }}>
                    <Link to='/about/'
                    style={{
                      color: `#0d6989`
                    }}>About</Link>
                  </li>
                  <li>
                    <Link to='/survey/'
                    style={{
                      color: `#0d6989`
                    }}>Survey</Link>
                  </li>
                  <li>
                    <Link to='/results/'
                    style={{
                      color: `#0d6989`
                    }}>Results</Link>
                  </li>
                  <li>
                    <Link to='/blog/'
                    style={{
                      color: `#0d6989`
                    }}>Blog</Link>
                  </li>
                  <li>
                    <Link to='/contact/'
                    style={{
                      color: `#0d6989`
                    }}>Contact</Link>
                  </li>
                </ul>
              </div>
          
            </div>
         
          </nav>
       
        </div>
        <ul class="sidenav" id="mobile-demo"
          style={{
            color: `#0d6989`
          }}
        >
        <li
        style={{
          color: `#0d6989 !important`
        }}
        >
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
