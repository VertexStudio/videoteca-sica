import React, { Component } from "react";
import "./Jumbotron.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Jumbotron from 'react-bootstrap/Jumbotron'
import logosica from "./../assets/LogoSica.jpg"

class Header extends Component<{}, {}> {

    render(){
        return(
            
                <img alt="draw" src={logosica} className="SicaLogo"></img>
        
        );
    }

}
 
export default Header;