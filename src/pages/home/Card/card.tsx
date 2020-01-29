import React, { Component} from 'react';
//import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonHeader } from '@ionic/react';
import {IonCardSubtitle, IonCardTitle} from '@ionic/react';
import './card.css'



interface IProps {
    url: any;
    //title: string;
    //subtittle:string ;
    //text:string;
    cardStyle:string;
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
        //<IonCardSubtitle  className="subtittle">{this.props.subtittle}</IonCardSubtitle>
          //              <p className="textStyle"> {this.props.text} </p>

        return(
          
                <div className={this.props.cardStyle} onClick={this.handleClick}>
                    <img alt="To show a draw" src={this.props.url } className ="cardThumbnail"/>
                    <div className={this.props.CardDescriptionStyle}>
                        
                        
                        
                    </div>
                </div>
         
              
        ) ;
    }
        
    
}

export default CardExample;

