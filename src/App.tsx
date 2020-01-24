import React from 'react';
import {
  IonApp,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import VideoPlayer from './pages/video/player/Player';
//import Header from './pages/home/header/Jumbotron';
import SearchBar from './pages/home/search/SearchBar';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */<CardExample text="Cupidatat veniam incididunt occaecat aliquip id dolor quis consectetur duis nulla aliqua laboris. Do proident nulla sint consequat fugiat magna aliqua dolore esse deserunt elit mollit ipsum ea. Ipsum ad incididunt ut labore eiusmod sint excepteur dolor qui est velit. Ut laborum qui do ea eiusmod eu sint quis. Quis amet sint reprehenderit laboris qui. Nisi nostrud magna id voluptate qui eiusmod qui culpa."
                thumbnail="cardvideo"
                cardDescription="cardDescriptionVideo"
                title="papa1" subtittle="patata" url='http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'  />
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (


  <IonApp>
    <IonReactRouter>
     <SearchBar/>
    </IonReactRouter>
  </IonApp>
);

export default App;
