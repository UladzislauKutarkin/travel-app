import CurrencyWidget from "../CurrencyWidget";
import TimeWidget from "../TimeWidget";
import WeatherWidget from "../WeatherWidget";
import "./WidgetsBox.scss";

const WidgetsBox = (props:any) => {


   const { capital, ISOCode, currency, name}:any = props;
 
   

  return (
    <div className="widget_box">
      <WeatherWidget capital = {capital} />
      <TimeWidget  ISOCode = {ISOCode} />
      <CurrencyWidget  ISOCode = {ISOCode}  currency = {currency} name = {name}/>
    </div>
  );
};
export default WidgetsBox;
