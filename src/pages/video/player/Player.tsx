import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';

interface IProps {
    url: string;
};
interface IState {};

class VideoPlayer extends Component< IProps, IState > {

    /*constructor( props: IProps) {
        super(props);
    }*/

    render(){
        return(
            <div className="video-container">
                <h1>Reproductor</h1>
                <Player
                    src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
                    fluid={true}
                />
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
