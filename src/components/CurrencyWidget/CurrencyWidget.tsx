import { Component } from "react";
import getCurrency from './exchangeratesapi'
import './CurrencyWidget.scss';

class CurrencyWidget extends Component {
    state = {
        currencies: [
            {
                name: 'usd',
                flag: 'us',
                cur: 0,
                sign: 'USD',
            },
            {
                name: 'euro',
                flag: 'eu',
                cur: 0,
                sign: 'EURO',
            },

            {
                name: 'rus',
                flag: 'ru',
                cur: 0,
                sign: 'RUB',
            },
            {
                name: 'current',
                flag: 'current',
                cur: 0,
                sign: 'current',
            },
        ]
    }

    componentDidMount() {
        this.setCurrencies();
    }

    setCurrencies = () => {

        getCurrency().then().then(currency => {

            const _cur = currency['data']['rates'];

            // console.log(_cur);

            const _currencies = [
                {
                    name: 'usd',
                    flag: 'us',
                    cur: _cur.USD.toFixed(2),
                    sign: 'USD',
                },
                {
                    name: 'euro',
                    flag: 'eu',
                    cur: _cur.EUR.toFixed(2),
                    sign: 'EURO',
                },

                {
                    name: 'rus',
                    flag: 'ru',
                    cur: _cur.RUB.toFixed(2),
                    sign: 'RUB',
                },
                {
                    name: 'current',
                    flag: 'current',
                    cur: 0,
                    sign: 'current',
                },
            ]

            this.setState({ currencies: _currencies })
        });


    }


    render() {
       
        const { currencies } = this.state;
        return (

            <div className="currency">
              

                <div className="currency-container">
                    <div className="title">Currency</div>

                    {
                    currencies.map(currency => {
                        return ( <div className="currency-row">
                        <div className="flag" style={{ backgroundImage: `url(https://www.countryflags.io/${currency.flag}/shiny/64.png)` }}></div>
                        <div className = "currency-item-box"> {currency.sign} </div>
                        <div className = "currency-item-box" >{currency.cur}</div>
                    </div>)
                    })
                }

                </div>

            </div>



        );
    }

}
export default CurrencyWidget;

//https://exchangeratesapi.io/

//https://www.countryflags.io/