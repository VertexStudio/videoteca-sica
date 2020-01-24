import React, { Component } from "react";
import {Player} from 'video-react';
import "./Player.css"
import './video-react.css';

interface IProps {
    url: string;
};
//interface IState {};

class VideoPlayer extends Component< IProps, {} > {

    /*constructor( props: IProps) {
        super(props);
    }*/

    render(){
        return(
            <div className="video-container">
                <h1>Reproductor</h1>
                <Player
                    src={this.props.url}
                    fluid={true}
                />
                    
                
            </div>
        );
    }

}

export default VideoPlayer;
