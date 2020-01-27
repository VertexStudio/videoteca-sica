import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';
//import currentVideo from "./assets/scene1.mp4";

interface IProps {
    url: string;
    onClose: () => void | undefined;
};
//interface IState {};

class VideoPlayer extends Component< IProps, {} > {

    /*constructor( props: IProps) {
        super(props);
    }*/

    render(){
        console.log(this.props.url);
        return(
            <div className="video-container">
                <h1>Reproductor</h1>
                <Player
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    fluid={true}
                />
                <button onClick={this.props.onClose}>Close</button>
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
