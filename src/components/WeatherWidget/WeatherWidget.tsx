import './WeatherWidget.scss';
import { useState, useEffect } from 'react';
import getCityWeather from './openweathermap';


const WeatherWidget = (props) => {


const [weather, setWeather] = useState({
                city: 'Minsk',
                temp: 0,
                feels: 0,
                humidity: 0,
                wind: 0,
                weather_icon: '',
            });



   const fetchWeather = (city: any) => {

        getCityWeather(city).then(weather => {

            const _weather: any = {
                city: props.capital,
                temp: (
                    weather['data']['main']['temp'] - 273.15).toFixed(0),
                feels: (
                    weather['data']['main']['feels_like'] - 273.15).toFixed(0),
                humidity: (
                    weather['data']['main']['humidity']),
                wind: (
                    weather['data']['wind']['speed']),
                weather_icon: `https://openweathermap.org/img/wn/${weather['data']['weather'][0]['icon']}.png`

            };

            setWeather(_weather);
        }
        );
    };

    useEffect(() => {
         fetchWeather(props.capital || "Minsk");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.capital]);

    const { city, temp, feels, humidity, wind, weather_icon } = weather;


            return (<div className="weather">
    
                <div className="weather_container">
                    <div className="city">{city}</div>
                    <div className="weather_params_all">
    
                        <div className="weather_params_left">
    
                            <div className="weather_temp ">{temp}&#176;</div>
                        </div>
    
                        <div className="weather_params_right">
                            <div> <img className="weather_icon" src={weather_icon} alt="icon" /></div>
    
                            <div>{props.feelsLike}: {feels}&#176;</div>
                            <div>{props.winder}: {wind} m/s</div>
                            <div>{props.humidity}: {humidity}%</div>
                        </div>
                    </div>
                </div>
            </div>);
}


export default WeatherWidget;