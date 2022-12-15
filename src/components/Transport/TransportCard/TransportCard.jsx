import { IonButton, IonIcon, IonItem, IonLabel , IonList} from '@ionic/react';
import { Link } from 'react-router-dom';
import { chevronBack, chevronForward, trashOutline } from 'ionicons/icons';
import "./transport_card.scss";
import { RiArrowRightSLine } from "react-icons/ri";

const placeHolder = 'https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png'


const TransportCard = ({transportItem}) => {

  return (
      <IonList>
            {  transportItem.map((transport) => {

                  return (
                   
                      <IonItem  className=' transportItem ion-no-padding  animate__animated animate__fadeIn' 
                         key={ transport.id } lines="none">
                          <Link to={`/transport/${transport.id}`}>
                               <div className='content-wrapper' slot="start" >
                                 <h2>{ transport?.busname }</h2>
                                 <p> {`${transport?.destination} -- `} 
                                     <span color="#000">{`( ${transport.roadno} )`}</span>
                                 </p>
                               </div>
                           </Link>

                           <div className="click_details" slot="end">
                                <Link to={`/transport/${transport.id}`} >
                                    <RiArrowRightSLine  className="click_arrow_icon"/>
                                 </Link>      
                            </div>
                        </IonItem>
                        
                    )
                })
          }
      </IonList>
  )
}

export default TransportCard;