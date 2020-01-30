import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';
import getModule from "./Switch";
//import Jumbotron from 'react-bootstrap/Jumbotron'

interface IProps {
    url: string;
    onClose: () => void | undefined;
};
//interface IState {};

class VideoPlayer extends Component< IProps, {} > {

    private videoToPlay = "";

    /*constructor( props: IProps) {
        super(props);
    }*/


    // private importVideo = () => {
    //     const path = videoList[this.props.url]
    //     console.log(path)
    //     import(path).then(video => {
    //         this.videoToPlay = video;
    //     })
        
    // }

    render(){
        this.videoToPlay = getModule(this.props.url) as string;
        
        return(
            <div className="video-container">                    
                    <button onClick={this.props.onClose} >Regresar</button>
                    
                    <img alt="draw" src="https://wallpaperaccess.com/full/391242.jpg" className="LogoVideo"></img>
                
                <Player
                    src={this.videoToPlay}
                    fluid={true}
                />
                
                
                

                <img alt="draw" src="https://wallpaperaccess.com/full/391242.jpg" className="ImgText "></img>
                <img alt="draw" src="https://wallpaperaccess.com/full/391242.jpg" className="ImgText "></img>


                <img  alt="draw" src="https://wallpaperaccess.com/full/391242.jpg" className="Partner  "></img>
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
