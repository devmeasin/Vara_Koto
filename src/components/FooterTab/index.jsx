import React from 'react'
import {IonToolbar, IonTitle , IonButtons , IonButton} from '@ionic/react'

export const FooterTab = ({children, Router}) => {
  return (
    <IonToolbar IonTabBar slot="bottom" className="ion-padding dwa-footer-tab-bar">
         <IonTitle size="small">Title Only</IonTitle>

         <IonButton slot="end" >Add to Cart</IonButton>
        
    </IonToolbar>
  )
}
