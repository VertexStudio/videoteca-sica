import CardExample from "../Card/card";
import React, { Component} from 'react';

let CardArray: number[]= [1,2,3,4,5,6,7]

interface IProps {

};
const cardData: JSX.Element[] = []

class ArrayCard extends Component<IProps, {}> {
    
    

    render() {

        return(<div></div>)

        // CardArray.forEach( (card) => {
        
        //     cardData.push(
        //         <CardExample
        //         url='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'  
        //         title="papa"
        //         subtittle="patata"
        //         text="Enim excepteur id sint veniam do id fugiat excepteur occaecat quis adipisicing. Dolor mollit qui id ipsum mollit aliqua consequat. Exercitation aute anim velit incididunt eu ea Lorem. Ad reprehenderit occaecat amet id qui voluptate cupidatat commodo nisi. Velit elit sit voluptate velit nulla ad et."
        //         thumbnail="cardThumbnail"
        //         CardDescriptionStyle="cardDescription">
                    
        //         </CardExample>,
        //       )
        //     } 
            
          
             
        
        // )

        // return(cardData);
    }
}



export default ArrayCard;

