import React, { Component} from 'react';
import "./footericon.css"


interface IProps {
    url: string;
    imgClass:string;
};

class FooterIcon extends Component < IProps, {} > {
    //  "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    
        render(){
    
            return(
                <img alt="draw"src={this.props.url} className={this.props.imgClass}></img>                  
            ) ;
        }
            
        
    }
    
    export default FooterIcon;