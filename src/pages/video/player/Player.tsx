import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';
import {getModule, getContentImg } from "./Switch";

//import Jumbotron from 'react-bootstrap/Jumbotron'

interface IProps {
    url: string;
    onClose: () => void | undefined;
    header: string;
    footer: string;
    videoToPlay: string;
    imagetoshow: string;
};
//interface IState {};

class VideoPlayer extends Component< IProps, {} > {

    //private videoToPlay = "";
    //private imagetoshow = "";

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
        // this.videoToPlay = getModule(this.props.url) as string;
        // this.imagetoshow = getContentImg(this.props.url) as string
        // mandar a traer la imagen 
        return(
            <div className="video-container">                    
                    
                    
                    <img alt="draw" onClick={this.props.onClose} src={this.props.header} className="LogoVideo"></img>
                
                <Player
                    src={this.props.videoToPlay}
                    fluid={true}
                />
                
                
                

                <img alt="draw" src={this.props.imagetoshow} className="ImgText "></img>
                


                <img  alt="draw" src={this.props.footer} className="Partner  "></img>
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
