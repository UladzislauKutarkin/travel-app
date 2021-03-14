import { Component } from "react";
import getCurrency from './exchangerates-api'
import './CurrencyWidget.scss';


interface CurrencyType {
    ISOCode: string, 
    currency: string, 
    name: string
  
}
class CurrencyWidget extends Component<CurrencyType> {
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
                flag: 'by',
                cur: 0,
                sign: 'current',
            },
        ]
    }

    componentDidMount() {
       
    }

    componentDidUpdate(prevProps) {

        if (prevProps !== this.props) {

            const {ISOCode, currency} = this.props;

/*
*
* ---------------UNCOMMENT TO GET WEATHER--------------------------
*
*/

        //    this.setCurrencies( ISOCode, currency) ;

        }
    }

    setCurrencies = (  ISOCode: string, out_currency: string ) => {

        getCurrency(out_currency).then(currencies => {

            const _cur = currencies['data']['conversion_rates'];
                 
            const _currencies = [
                {
                    name: 'usd',
                    flag: 'us',
                    cur: _cur.USD.toFixed(3),
                    sign: 'USD',
                },
                {
                    name: 'euro',
                    flag: 'eu',
                    cur: _cur.EUR.toFixed(3),
                    sign: 'EURO',
                },

                {
                    name: 'rus',
                    flag: 'ru',
                    cur: _cur.RUB.toFixed(3),
                    sign: 'RUB',
                },
                {
                    name: 'current',
                    flag: ISOCode.toLocaleLowerCase(),
                    cur:  _cur[out_currency].toFixed(3),
                    sign: out_currency,
                },
            ];

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
                     
                        if (currency.name === 'current' && currency.sign ===  "USD" && this.props.currency === 'USD') {return <div></div>}
                       
                            return ( <div  key = {currency.name} className="currency-row">
                            <div  className="flag" style={{ backgroundImage: `url(https://www.countryflags.io/${currency.flag}/shiny/64.png)` }}></div>
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

//https://v6.exchangerate-api.com/v6/081b46e91a52545e83bc2960/