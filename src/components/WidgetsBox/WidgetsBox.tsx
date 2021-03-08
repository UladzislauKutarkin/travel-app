import CurrencyWidget from '../CurrencyWidget';
import TimeWidget from '../TimeWidget';
import WeatherWidget from '../WeatherWidget';
import './WidgetsBox.scss';

const WidgetsBox = () => {
    return (  
            <div className="widget_box brd">
                <h2>WidgetBox</h2>
                <h3>страница страны</h3>

                <ul>
                    <li>фото страны, название страны, название её столицы</li>
                    <li>краткую информацию о стране</li>
                    <li>фотогалерею достопримечательностей страны (не меньше шести) с названием и небольшим описанием каждой из них</li>
                    <li>видео о стране или её достопримечательностях</li>

                    <li>Также на странице страны есть виджеты*:</li>

                    <li>информер погоды в столице страны</li>
                    <li>курс местной валюты по отношению к доллару, евро, рублю</li>
                    <li>дата и время в столице страны</li>
                </ul>

                <WeatherWidget />
                <TimeWidget />
                <CurrencyWidget />

            </div>


        
    );
}
export default WidgetsBox;