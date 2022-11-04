import { IonButton, IonCol, IonContent, IonRow, IonText } from "@ionic/react";

import {createRef , useEffect} from 'react'

import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings';
import { Player } from '@lottiefiles/react-lottie-player';
import offlinelogo from './no-internet-connection.json'

import './offline.scss';

import { RiWifiFill } from "react-icons/ri";
import { FcWiFiLogo } from "react-icons/fc";

export const Offline = () => {

    let animation = createRef();

    useEffect(() => {
        animation.current.play()
    }, []);

    const openWifi = async () => { 
        OpenNativeSettings.open("wifi", () => {
            console.log('opened settings');
        });
    }

  return (
    <IonContent>
        <IonRow className="ion-align-items-center dwa-offline-content-wrap">
            <IonCol>
                <div className="offline-content ion-text-center">
                   
                    <Player
                        ref={animation}// set the ref to your class instance
                        autoplay={true}
                        loop={true}
                        controls={true}
                        src={offlinelogo}
                        style={{ height: '100%', width: '100%' }}
                    ></Player>
                    
                    <IonText className="offline-content-text">দুঃখিত আপনার ইন্টারনেট চালু নেই </IonText>
                     <IonText>ইন্টারনেট সংযোগ চালু করার জন্য <br/> বাটন ক্লিক করুন </IonText>

                     <IonButton className="ion-no-padding offline-button" onClick={openWifi}>
                        <FcWiFiLogo className="ion-react-icon"/>
                    </IonButton>
                </div>
            </IonCol>
        </IonRow>
   </IonContent>
  )
}
