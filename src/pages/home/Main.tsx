import React, { Component} from 'react';
import Jumbotron from "./header/Jumbotron";
//import ArrayCard from "./ArrayCard/ArrayCardAndList";
import Card from "./Card/card";
import Player from "../video/player/Player";
interface IMainState {
    showVideo: boolean;
    currentVideo: string;
}

class Home extends Component<{}, IMainState>{

    constructor(props: any){
        super(props);

        this.state = {
            showVideo: false,
            currentVideo: ""
        }
    }

    private backToHome = () => {
        this.setState({ showVideo: false })
    }

    private showVideo = (video: string) => {
        this.setState({ showVideo: true, currentVideo: video })
    }

    render(){

        if (this.state.showVideo){
            return(
            <Player 
                url={this.state.currentVideo}
                onClose={this.backToHome}
                />
            )
        }

        return(
            <div id="container">
                <Jumbotron />
                <Card 
                    url="https://en.es-static.us/upl/2016/02/M42-Orion-Nebula-2-5-2016.jpg" 
                    title="Orion" subtittle="Orion nebula" text="The orion's nebula" 
                    thumbnail="" 
                    CardDescriptionStyle="cardDescription"
                    videoId="1"
                    onShowVideo={this.showVideo} />
                <Card 
                    url="https://opengameart.org/sites/default/files/sun.png" 
                    title="The Sun" subtittle="Helios, Ra..." 
                    text="A example text" thumbnail="" 
                    CardDescriptionStyle="cardDescription"
                    videoId="2"
                    onShowVideo={this.showVideo} />
                <Card 
                    url="https://magicforestworkshop.files.wordpress.com/2014/12/andromeda-galaxy.jpg" 
                    title="Andromeda" subtittle="Andromeda Galaxy" text="This galaxy is comming..." 
                    thumbnail="" 
                    CardDescriptionStyle="cardDescription"
                    videoId="3"
                    onShowVideo={this.showVideo} />

            </div>
            
        );
    }
}

export default Home;