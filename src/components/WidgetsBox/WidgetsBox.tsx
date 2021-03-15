import CurrencyWidget from "../CurrencyWidget";
import TimeWidget from "../TimeWidget";
import WeatherWidget from "../WeatherWidget";
import "./WidgetsBox.scss";

const WidgetsBox = (props:any) => {


   const {wind, capital, ISOCode, currency, name}:any = props;
 
   

  return (
    <div className="widget_box">
      <WeatherWidget winder={wind} capital = {capital} />
      <TimeWidget  ISOCode = {ISOCode} />
      <CurrencyWidget  ISOCode = {ISOCode}  currency = {currency} name = {name}/>
    </div>
  );
};
export default WidgetsBox;
