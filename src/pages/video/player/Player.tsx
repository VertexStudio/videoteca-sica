import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';
import getModule from "./Switch";

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
                <h1>Reproductor</h1>
                <Player
                    src={this.videoToPlay}
                    fluid={true}
                />
                <button onClick={this.props.onClose}>Close</button>
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
