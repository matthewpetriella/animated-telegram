import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
    <h1>
       <div class="container" className="container flex-row justify-space-between-lg justify-center align-center">
         <Link to="/">
           <h1 data-text="SWEET TREATS" id="name" className="title">SWEET TREATS</h1>
         </Link>
      </div>
    </h1>
       <div>
         <nav className="text-center">
           {Auth.loggedIn() ? (
             <>
               <Link to="/ViewCart"> View Cart</Link>
               <a href="/" class="neon-button" onClick={logout}>
                 Logout
               </a>
             </>
           ) : (
             <>
               <Link to="/login">Login</Link>
               <Link to="/signup">Signup</Link>
             </>
           )}
         </nav>
       </div>
     </header>
  );
}
export default Header;
