import React, { Component} from 'react';
//import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonHeader } from '@ionic/react';
import {IonCardSubtitle, IonCardTitle} from '@ionic/react';
import './card.css'



interface IProps {
    url: string;
    title: string;
    subtittle:string ;
    text:string;
    thumbnail:string;
    CardDescriptionStyle:string
};


class CardExample extends Component < IProps, {} > {
//  "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"
    render(){

        return(
          
                <div className="cardDiv">
                    <img height="250" width="300" alt="GG" src={this.props.url } className ={this.props.thumbnail}/>
                    <div className={this.props.CardDescriptionStyle}>
                        <IonCardSubtitle  className="subtittle">{this.props.subtittle}</IonCardSubtitle>
                        <IonCardTitle className="tittle">{this.props.title}</IonCardTitle>
                        <p className="textStyle"> {this.props.text} </p>
                    </div>
                </div>
         
              
        ) ;
    }
        
    
}

export default CardExample;

