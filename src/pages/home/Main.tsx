import React, { Component} from 'react';
import Jumbotron from "./header/Jumbotron";
//import ArrayCard from "./ArrayCard/ArrayCardAndList";
import Card from "./Card/card";


class Home extends Component<{},{}>{

    render(){
        return(
            <div id="container">
                <Jumbotron />
                <Card url="" title="" subtittle="" text="" thumbnail="" CardDescriptionStyle="cardDescription" />
                <Card url="" title="" subtittle="" text="" thumbnail="" CardDescriptionStyle="cardDescription" />
                <Card url="" title="" subtittle="" text="" thumbnail="" CardDescriptionStyle="cardDescription" />

            </div>
            
        );
    }
}

export default Home;