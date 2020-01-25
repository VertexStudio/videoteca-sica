import React, { Component} from 'react';
import Jumbotron from "./header/Jumbotron";
//import ArrayCard from "./ArrayCard/ArrayCardAndList";
import Card from "./Card/card";


class Home extends Component<{},{}>{

    render(){
        return(
            <div id="container">
                <Jumbotron />
                <Card url="https://en.es-static.us/upl/2016/02/M42-Orion-Nebula-2-5-2016.jpg" title="Orion" subtittle="Orion nebula" text="The orion's nebula" thumbnail="" CardDescriptionStyle="cardDescription" />
                <Card url="https://opengameart.org/sites/default/files/sun.png" title="The Sun" subtittle="Helios, Ra..." text="A example text" thumbnail="" CardDescriptionStyle="cardDescription" />
                <Card url="https://magicforestworkshop.files.wordpress.com/2014/12/andromeda-galaxy.jpg" title="Andromeda" subtittle="Andromeda Galaxy" text="This galaxy is comming..." thumbnail="" CardDescriptionStyle="cardDescription" />

            </div>
            
        );
    }
}

export default Home;