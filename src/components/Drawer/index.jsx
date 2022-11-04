import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonText, IonToolbar } from "@ionic/react";
import { arrowBack } from 'ionicons/icons';
import React,{ useState } from "react";
import { withRouter } from 'react-router';
import { useHistory } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { IoListOutline , IoHomeOutline , IoMail } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.scss';
import logo from './logo.png'

const Drawer = () => {
	   
	const [menuData, setMenuData] = useState([{name:'হোম' , icon : 'IoHomeOutline'} , {name:'ভাড়ার তালিকাঃ' , icon : 'IoListOutline'} , {name:'যোগাযোগঃ' , icon : ''}]);

	let history = useHistory()
	// console.log(history)

    const menuhideHandler = (menuhideid) =>{
    	document.getElementById( menuhideid ).close(); 
    }

	const navigateToPage = (data) => {
		history.push(data.link);
	}
	
	return (
		<>
			<IonMenu side="start" menuId="main-menu" contentId="menu" id = "main-menu-x">

				<IonContent className="menu-wrapper">

					<span className="menu-logo-wrapper ion-no-padding">
     				     <LazyLoadImage effect="blur" className="menu-logo" src={logo} />
					</span>
			
					<IonList>
						<IonList className="menu-part">
							{
								menuData.map((data, index) => {

									return (
										<IonMenuToggle className="menu-toggle" key={index}>
											{
											  <IonItem
												   onClick={() => navigateToPage(data)} detail={false} className="menu-items " lines="none" >
												
												<IonText className="menu-text">{data?.name}</IonText>
											  </IonItem>
											}									
										</IonMenuToggle>
									)
								})}
						</IonList>
					</IonList>

					
                 	<IonButton className="ion-no-padding menu-button" onClick={() => {
								menuhideHandler("main-menu-x")
							}}>
							<VscChromeClose className="ion-react-icon" />
					</IonButton>

				</IonContent>

			</IonMenu>
			<IonRouterOutlet id="menu"></IonRouterOutlet>
		</>
	)
}

export default withRouter(
	Drawer
);
