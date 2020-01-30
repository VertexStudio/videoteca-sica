import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';
import {getModule, getContentImg } from "./Switch";

//import Jumbotron from 'react-bootstrap/Jumbotron'

interface IProps {
    url: string;
    onClose: () => void | undefined;
};
//interface IState {};

class VideoPlayer extends Component< IProps, {} > {

    private videoToPlay = "";
    private imagetoshow = "";

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
        this.imagetoshow = getContentImg(this.props.url) as string
        // mandar a traer la imagen 
        return(
            <div className="video-container">                    
                    
                    
                    <img alt="draw" onClick={this.props.onClose} src="https://wallpaperaccess.com/full/391242.jpg" className="LogoVideo"></img>
                
                <Player
                    src={this.videoToPlay}
                    fluid={true}
                />
                
                
                

                <img alt="draw" src={this.imagetoshow} className="ImgText "></img>
                


                <img  alt="draw" src="https://wallpaperaccess.com/full/391242.jpg" className="Partner  "></img>
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
