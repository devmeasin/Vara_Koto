import { IonSearchbar } from "@ionic/react";
import { useState } from 'react';
import './search_bar.scss';

const SearchBar = () => {
    
  const [searchText, setSearchText] = useState('');

  return (
    <div className="search-bar-wrapper">
        <IonSearchbar className="search-bar" placeholder=' বাস সার্চ করুন' 
           value={searchText} onIonChange={e => setSearchText(e.detail.value)}>
        </IonSearchbar>
    </div>
  )
}

export default SearchBar