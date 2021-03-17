import CurrencyWidget from "../CurrencyWidget";
import TimeWidget from "../TimeWidget";
import WeatherWidget from "../WeatherWidget";
import "./WidgetsBox.scss";

const WidgetsBox = (props: any) => {
  const {
    currenc,
    localTime,
    humidity,
    feelsLike,
    days,
    months,
    wind,
    capital,
    ISOCode,
    currency,
    name,
  }: any = props;

  return (
    <div className="widget_box">
      <WeatherWidget
        humidity={humidity}
        feelsLike={feelsLike}
        winder={wind}
        capital={capital}
      />
      <TimeWidget
        ISOCode={ISOCode}
        days={days}
        months={months}
        localTime={localTime}
      />
      <CurrencyWidget
        ISOCode={ISOCode}
        currency={currency}
        name={name}
        currenc={currenc}
      />
    </div>
  );
};
export default WidgetsBox;
