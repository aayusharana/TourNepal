import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import logoo from "../assets/logoo.jpg"


class Navbar extends Component {
   state = {clicked: false};
   handleClick = () =>{
     this.setState({ clicked: !this.state.clicked})
   }
  render() {
    return (
      <nav className="NavbarItems">
      
        <Link to="/">
           <div>
              <img
                style={{
                  width: "100px",
                  height: "60px",
                }}
                src={logoo}
                alt="Logo"
             />
          </div>
        </Link>

         <div className="menu-icons" onClick=
         {this.handleClick}>
          <i className ={this.state.clicked ? "fas fa-times" 
          : "fas fa-bars"}></i>
         </div>

        <ul className={this.state.clicked ? 
        "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className="fa-solid fa-house"></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
         <Link to="/Login">
         {/* <button>Login</button> */}
         </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
