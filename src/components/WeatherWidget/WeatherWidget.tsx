import './WeatherWidget.scss';
import { Component } from 'react';
import getCityWeather from './openweathermap';

class WeatherWidget extends Component {
    state = {
        weather: {
            city: 'City',
            temp: 0,
            feels: 0,
            humidity: 0,
            wind: 0,
            weather_icon: '',
        }  
    }



    setWeather = () => {

        getCityWeather('Minsk').then(weather => {
           
            const _weather = {
                city: weather['data']['name'],
                temp: (
                    weather['data']['main']['temp'] - 273.15).toFixed(0),
                feels: (
                    weather['data']['main']['feels_like'] - 273.15).toFixed(0),
                humidity: (
                    weather['data']['main']['humidity']),
                wind: (
                    weather['data']['wind']['speed']),
                weather_icon: `https://openweathermap.org/img/wn/${weather['data']['weather'][0]['icon']}.png`

            }

            this.setState({ weather: _weather })
        }
        );
    }

    addZero = (n) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    getTime = () => {

        const today = new Date();

        const _time = {

            hour: today.getHours(),
            min: today.getMinutes(),
            sec: today.getSeconds(),
        }

        this.setState({ time: _time })
    }


    getDay = () => {
        const today = new Date();
        const _day = {
            day: today.getDay(),
            date: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear() - 2000,
        }
        this.setState({ day: _day })
    }

    componentWillMount() {
        this.setWeather();
        this.getDay();
    }

    componentDidUpdate() {
        setTimeout(this.getTime, 1000);
    }

    render() {

        const { city, temp, feels, humidity, wind, weather_icon } = this.state.weather;
        
        return (<div className="weather">

            <div className="weather_container">
                <div className="city">{city}</div>
                <div className="weather_params_all">

                    <div className="weather_params_left">

                        <div className="weather_temp ">{temp}&#176;</div>
                    </div>

                    <div className="weather_params_right">
                        <div> <img className="weather_icon" src={weather_icon} alt="icon" /></div>

                        <div>feels like: {feels}&#176;</div>
                        <div>wind: {wind} m/s</div>
                        <div>humidity: {humidity}%</div>
                    </div>
                </div>
            </div>
        </div>);
    }

}



export default WeatherWidget;