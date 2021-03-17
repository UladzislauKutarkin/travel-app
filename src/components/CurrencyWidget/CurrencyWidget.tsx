import { useState, useEffect } from "react";
import getCurrency from "./exchangerates-api";
import "./CurrencyWidget.scss";

const CurrencyWidget = (props) => {
  const [currencies, setCurrencies] = useState([
    {
      name: "usd",
      flag: "us",
      cur: 0,
      sign: "USD",
    },
    {
      name: "euro",
      flag: "eu",
      cur: 0,
      sign: "EURO",
    },

    {
      name: "rus",
      flag: "ru",
      cur: 0,
      sign: "RUB",
    },
    {
      name: "current",
      flag: "by",
      cur: 0,
      sign: "current",
    },
  ]);

  const fetchCurrencies = (ISOCode: string, out_currency: string) => {
    getCurrency(out_currency).then((currencies) => {
      const _cur = currencies["data"]["conversion_rates"];

      const _currencies = [
        {
          name: "usd",
          flag: "us",
          cur: _cur.USD.toFixed(3),
          sign: "USD",
        },
        {
          name: "euro",
          flag: "eu",
          cur: _cur.EUR.toFixed(3),
          sign: "EURO",
        },

        {
          name: "rus",
          flag: "ru",
          cur: _cur.RUB.toFixed(3),
          sign: "RUB",
        },
        {
          name: "current",
          flag: ISOCode.toLocaleLowerCase(),
          cur: _cur[out_currency].toFixed(3),
          sign: out_currency,
        },
      ];

      setCurrencies(_currencies);
    });
  };

  useEffect(() => {
    const { ISOCode, currency } = props;
   fetchCurrencies(ISOCode, currency)
  }, [props]);

  const { currenc } = props;

  return (
    <div className="currency">
      <div className="currency-container">
        <div className="title">{currenc}</div>

        {currencies.map((currency) => {
          if (
            currency.name === "current" &&
            currency.sign === "USD" &&
            props.currency === "USD"
          ) {
            return <div></div>;
          }

          return (
            <div key={currency.name} className="currency-row">
              <div
                className="flag"
                style={{
                  backgroundImage: `url(https://www.countryflags.io/${currency.flag}/shiny/64.png)`,
                }}
              ></div>
              <div className="currency-item-box"> {currency.sign} </div>
              <div className="currency-item-box">{currency.cur}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrencyWidget;
