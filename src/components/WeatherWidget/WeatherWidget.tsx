import './WeatherWidget.scss';
import { Component } from 'react';
import getCityWeather from './openweathermap';
interface WeatherTypes {
    capital: string;
    winder:string
}


class WeatherWidget extends Component<WeatherTypes> {
    state = {
        weather: {
            city: 'Minsk',
            temp: 0,
            feels: 0,
            humidity: 0,
            wind: 0,
            weather_icon: '',
        }
    }

    componentDidMount() {

    }


    setWeather = (city) => {

        getCityWeather(city).then(weather => {

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


    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {

            this.setWeather(this.props.capital);

            const _weather = {
                city: this.props.capital,
                temp: 0,
                feels: 0,
                humidity: 0,
                wind: 0,
                weather_icon: '',
            };

            this.setState({ weather: _weather });

        }

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
                        <div>{this.props.winder}: {wind} m/s</div>
                        <div>humidity: {humidity}%</div>
                    </div>
                </div>
            </div>
        </div>);
    }

}


export default WeatherWidget;