import { IonContent, IonRow , IonMenuButton ,  IonButtons , IonButton , IonSearchbar} from "@ionic/react";
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import SearchBar from "../../components/SearchBar";
import TransportCard from "../../components/Transport/TransportCard/TransportCard";


export const Home = () => {


  const [ transport, setTransport ] = useState([
    {
      id: 1,
      busname: "বিকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
      
    },
    {
      id: 2,
      busname: "মৌমিতা পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 3,
      busname: "আকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 113,
      busname: "বিকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 32,
      busname: "মৌমিতা পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 31,
      busname: "বিকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 10,
      busname: "মৌমিতা পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 173,
      busname: "বিকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
  
    {
      id: 153,
      busname: "আকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 131,
      busname: "মৌমিতা পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 123,
      busname: "বিকাশ পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
    {
      id: 133,
      busname: "আকাশ  পরিবহন",
      destination : "আজিমপুর টু উত্তরা",
      roadno: "এ - ২৫৬ নং"
    },
  ]);
  

  return (
    <Layout isTabs='false' title="বাস এর তালিকা ও রুট" headerHide='true' >
      
      <IonContent fullscreen className="no-scroll">
          
          <SearchBar/>
          <TransportCard transportItem={transport}/>
      
      </IonContent>
    </Layout>
  )
}
