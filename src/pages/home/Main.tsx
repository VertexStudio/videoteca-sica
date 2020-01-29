import React, { Component} from 'react';
import Jumbotron from "./header/Jumbotron";
//import ArrayCard from "./ArrayCard/ArrayCardAndList";
import Card from "./Card/card";
import Player from "../video/player/Player";
import FooterIcon from "./EUIcon/footerIcon"
import Image1 from "./assets/Pilar1.jpg"
import Image2 from "./assets/Pilar2.jpg"
import Image3 from "./assets/Pilar3.jpg"
import Image4 from "./assets/Pilar4.jpg"
import Image5 from "./assets/Pilar5.jpg"
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem';

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
                    //url="https://en.es-static.us/upl/2016/02/M42-Orion-Nebula-2-5-2016.jpg" 
                    url={Image1 }
                    title="Pilar Fortalecimiento Institucional" 
                    //subtittle="Orion nebula" text="The orion's nebula" 
                    cardStyle="cardDiv"
                    CardDescriptionStyle="cardDescription"
                    videoId="1"
                    onShowVideo={this.showVideo} />
                <Card 
                    //url="https://opengameart.org/sites/default/files/sun.png" 
                    url={Image2}
                    title="Pilar de Integración Económica" 
                    //subtittle="Helios, Ra..." text="A example text" 
                    cardStyle="cardDiv"
                    
                    CardDescriptionStyle="cardDescription"
                    videoId="2"
                    onShowVideo={this.showVideo} />
                <Card 
                    //url="https://magicforestworkshop.files.wordpress.com/2014/12/andromeda-galaxy.jpg" 
                    url={Image3}
                    title="Pilar de Integración Social
                    " //subtittle="Andromeda " text="This galaxy" 
                    cardStyle="cardDiv"
                    CardDescriptionStyle="cardDescription"
                    videoId="3"
                    onShowVideo={this.showVideo} />
                <Card 
                    //url="https://magicforestworkshop.files.wordpress.com/2014/12/andromeda-galaxy.jpg" 
                    url={Image4}
                    title="Pilar de Seguridad Democrática
                    "// subtittle="Andromeda " text="This galaxy" 
                    cardStyle="cardDivEnd"
                    CardDescriptionStyle="cardDescription"
                    videoId="4"
                    onShowVideo={this.showVideo} />
                <Card 
                    //url="https://magicforestworkshop.files.wordpress.com/2014/12/andromeda-galaxy.jpg" 
                    url={Image5}
                    title="Pilar Cambio Climático y Gestión Integral de Riesgos" 
                    //subtittle="Andromeda " text="This galaxy" 
                    cardStyle="cardDiv"
                    CardDescriptionStyle="cardDescription"
                    videoId="5"
                    onShowVideo={this.showVideo} />
                <FooterIcon
                    url="https://cdn.pixabay.com/photo/2013/07/13/01/09/european-union-155207_960_720.png"
                    imgClass="footerImgClass"

                />

            </div>
            
        );
    }
}

export default Home;