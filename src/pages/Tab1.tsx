import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchBar from '../components/SearchBar';
import './Tab1.css';
import WeatherDetail from '../components/WeatherDetail';
import weather from '../repository/weather'

const Tab1: React.FC = () => {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);


  const getWeather = async (location: string) => {
    const data = await weather.getWeather(location)
    setCurrentWeather(data)    
    const forecast = await getForecast(data.coord.lon, data.coord.lat)
    setCurrentForecast(forecast)
  }

  const getForecast= async (lon: number, lat: number) => {
    const data = await weather.getForecast(lon, lat)
    
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lieu Actuel</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SearchBar  defaultName={'Paris'}  getWeather={(location: string) => getWeather(location)} />
        <WeatherDetail forecast={currentForecast} weather={currentWeather} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
