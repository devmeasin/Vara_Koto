import { IonHeader, IonMenuButton, IonImg, IonPage, IonText, IonTitle, IonToolbar, useIonRouter , IonButtons,IonButton, IonContent } from "@ionic/react";
// react - icon lib 
import { TbArrowNarrowLeft } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";
import Tabs from './Tabs';
import {FooterTab} from "./FooterTab"

const Layout = ({ children, headerHide='true', title = '', subTitle = '', logo , titleCenter = 'true', isIcon = 'false', isTabs = 'false' , isFooterTab = 'false', backButton = 'true'}) => {

	const history = useIonRouter();
	
	return (

		<IonPage className='dwa-ion-page'>
            {/* start ion header  */}

			{
				headerHide === 'true' && 
				
				<IonHeader className="dwa-page-header" mode="ios">

					<IonToolbar 
						className={`dwa-ion-toolbar ${ titleCenter === 'true' && 'dwa-page-header-center-it'}`}
					>
    						{
                               history.routeInfo.pathname === '/' ?
							   <IonButtons slot="start">
								   <IonMenuButton  menu="main-menu" /> 
							   </IonButtons>
							   :
    							backButton === 'true' && 
        							<IonButtons slot="start">
             							<IonButton className="ion-no-padding" onClick={() => {
             								if (history.routeInfo.tab) {
             									history.push(history.routeInfo.lastPathname || '/', 'back');
             								} else {
             									if(history.canGoBack()){
             										history.goBack();
             									}
             								}
             							}}>
             							    <TbArrowNarrowLeft color='#000' size ="25px"/>
             							</IonButton>
             						</IonButtons>
    						}
						

							<IonTitle slot="secondary">
									<span dangerouslySetInnerHTML={{__html:  title}}></span>
							</IonTitle>

							{logo && <IonImg src={logo}></IonImg>}

							{isIcon == 'true' &&
								<Link to="/cart">
									<FiShoppingBag className="ion-react-icon ion-float-right layout-title-icon" />
								</Link>
							}
							
						</IonToolbar>

						<IonText className="ion-padding">{ subTitle }</IonText>

					</IonHeader>
			}
			

             {/* end ion header  */}

                <IonContent className="ion-padding-horizontal" > { children }</IonContent>
			

			{isTabs === 'true' && <Tabs /> }
			
			{isFooterTab === 'true' && <FooterTab /> }
		</IonPage>
	)
}

export default Layout;