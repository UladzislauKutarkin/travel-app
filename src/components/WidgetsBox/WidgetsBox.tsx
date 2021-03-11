
import CurrencyWidget from "../CurrencyWidget";
import TimeWidget from "../TimeWidget";
import WeatherWidget from "../WeatherWidget";
import "./WidgetsBox.scss";

const WidgetsBox = () => {
  return (
    <div className="widget_box">
      <WeatherWidget />
      <TimeWidget />
      <CurrencyWidget />
    </div>
  );
};
export default WidgetsBox;