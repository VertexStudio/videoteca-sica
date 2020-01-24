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

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './app.css'

/* Theme variables */
import './theme/variables.css';
import CardExample from './Home/Card/card'
import ArrayCard from "./Home/ArrayCard/ArrayCardAndList"




const App: React.FC = () => (


  <IonApp>
    <IonReactRouter>

    <ArrayCard></ArrayCard>

    </IonReactRouter>
  </IonApp>
);

export default App;
