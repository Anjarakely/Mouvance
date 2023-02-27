import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
function NavBar(){
       return(
        <div className="navbar">
                <div className="tsiaiko">
                    <em>
                      e-bosy
                    </em>
                  </div>
                 <div className="link">
                    <span className="link-item">
                     <Link
                     to={""}
                      className='link-content'>
                      Accueil
                    </Link>
                </span>
                <span className="link-item">
                <Link
                    to={""} 
                    className='link-content'>
                    connexion
                </Link>
                </span>
                <span className="link-item">
                <Link
                 to={""} 
                    className='link-content'>
                    inscription
                </Link>
                </span>
                {/* <span className="link-item">
                <Link 
                 to={""} 
                    className='link-content'>
                    
                </Link>
               </span> */}
        </div>
    </div>
       );
}
export default(NavBar);