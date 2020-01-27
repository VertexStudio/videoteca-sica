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
    CardDescriptionStyle: string;
    videoId: string;
    onShowVideo: (video: string) => void | undefined;
};


class CardExample extends Component < IProps, {} > {
//  "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg"


    private handleClick = () => {
        this.props.onShowVideo(this.props.videoId);
    }


    render(){

        return(
          
<<<<<<< HEAD
                <div className="cardDiv">
                    <img  alt="GG" src={this.props.url } className ={this.props.thumbnail}/>
=======
                <div className="cardDiv" onClick={this.handleClick}>
                    <img alt="To show a draw" src={this.props.url } className ={this.props.thumbnail}/>
>>>>>>> e66ccef84b2fafd907e0eab8a4d7cc348b92c56b
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

