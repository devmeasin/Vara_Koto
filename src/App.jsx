import { useState, useEffect } from "react";

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact , IonContent, IonText } from '@ionic/react';
import { Route } from 'react-router-dom';
import routes from './routes';


import { Plugins, Capacitor } from "@capacitor/core";
import { Network } from '@capacitor/network';


import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/global.scss';
import './theme/variables.css';


import OfflinePage from './pages/Offline';
import Drawer from './components/Drawer';

setupIonicReact();

const App = () => {

  // const [internet , setInternet] = useState({connected: true , connectionType: "wifi" || "cellular"});
  const [internet , setInternet] = useState({connected: true , connectionType: "wifi" || "cellular"});

  useEffect(() => {

    logCurrentNetworkStatus();
    
    if (Capacitor.isNative) {

      Plugins.App.addListener("backButton", (e) => {
         if (window.location.pathname === "/") {
 
           Plugins.App.exitApp();
           // let ans = window.confirm("Are you sure");
           // if (ans) {
           //   Plugins.App.exitApp();
           // } 
         } else if (window.location.pathname === "/home") {
           Plugins.App.exitApp();
         } 
      });
    }
    
  }, []);


  // check the internet connection . 

    const logCurrentNetworkStatus = async () => {
      const status = await Network.getStatus();
      setInternet(status);
    };
  
    Network.addListener( 'networkStatusChange' , (status) => {
      setInternet(status);
    });
    
   // check the internet connection end here . 



  return (
    <IonApp>
      <IonReactRouter>
        <Drawer/>
      {
        internet.connected == true &&  (internet.connectionType === 'wifi' || internet.connectionType === 'cellular') ? 
            <IonRouterOutlet>
                  { 
                  routes.map((route,index) => <Route key={index} exact  path={route.path} component={route.component}/>)
                  }
            </IonRouterOutlet>
           : <OfflinePage/>
      }
      </IonReactRouter> 

        
    </IonApp>
  )
    
};

export default App;
