import { IonInfiniteScroll, IonInfiniteScrollContent, IonSpinner } from "@ionic/react"
import { useDispatch, useSelector } from 'react-redux';
import {infiniteScrollControll} from '../store/productSlice'

const InfiniteScroll = ({children, fetchMoreData}) => {
    
    const {infinite_active} = useSelector((state) => state.products.infiniteScroll);
    const dispatch = useDispatch();

    const handleInfiniteScroll = (e) => {

        if(infinite_active){
            fetchMoreData();
        }
        dispatch(infiniteScrollControll(true));
        
        setTimeout(() => {
            dispatch(infiniteScrollControll(true));
            e.complete();
        }, 500);

        // if (infinite_active == false) {
        //     e.target.disabled = true;
        // }
    }

    return (
        <>
            {children}
            {infinite_active ? 
            <IonInfiniteScroll className="ispinner"  threshold="0" id="infinite-scroll" onIonInfinite={(e) => {
                handleInfiniteScroll(e.target)
            }}>
                <IonInfiniteScrollContent
                loadingSpinner='circular'>
                </IonInfiniteScrollContent>
            </IonInfiniteScroll> : ''}
        </>
    )
}

export default InfiniteScroll;