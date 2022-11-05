import { IonBadge, IonLabel, IonTabBar, IonTabButton, useIonRouter } from "@ionic/react";

// react - icon lib 
import { IoHomeOutline } from "react-icons/io5";
import { RiStore2Line, RiAccountPinBoxLine} from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";

const Tabs = ({children, Router}) => {

    let cart =  {};
    let favorite =  {};
    let cartItem = Object.keys(cart).length ||'';
    let favItem = Object.keys(favorite).length ||'';

    const history = useIonRouter();


    return (
        <>
            <IonTabBar slot="bottom" className="ion-padding dwa-tab-bar">

                <IonTabButton tab="profile" href="/profile">
                    {/* <IonIcon icon={personOutline} /> */}
                    <RiAccountPinBoxLine className="ion-react-icon" />
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>

                {/* <IonTabButton tab="Categories" href="/categories" mode="ios">
                    <IonIcon icon={appsOutline} />
                    <IonLabel>Categories</IonLabel>
                    {
                        favItem > 0 &&
                         <IonBadge>{favItem}</IonBadge>
                    }
                </IonTabButton> */}
                

                <IonTabButton tab="cart" href="/cart">
                    {/* <IonIcon icon={cartOutline} /> */}
                    
                    <FiShoppingBag className="ion-react-icon"/>
                   
                    <IonLabel>Cart</IonLabel>
                    {
                        cartItem > 0 &&
                         <IonBadge>{cartItem}</IonBadge>
                    }
                </IonTabButton>

                <IonTabButton tab="order" href="/shop">
                    {/* <IonIcon icon={bagHandleOutline} /> */}
                    <RiStore2Line className="ion-react-icon"/>

                    <IonLabel>Shop</IonLabel>
                </IonTabButton>
                

                <IonTabButton className="home-tab" tab="home" href="/">
                    <IoHomeOutline className="ion-react-icon" />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                
            </IonTabBar>
        </>
    )
}

export default Tabs;