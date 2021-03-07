import { Component } from "react";
import getCurrency from './exchangeratesapi'
import './CurrencyWidget.scss';

class CurrencyWidget extends Component {
    state = {
        currencies: {
            usd: 0,
            euro: 0,
            current: 0
        }
    }

    componentDidMount() {
        this.setCurrencies();
    }

    setCurrencies = () => {

        getCurrency().then(console.log);
        
    }


    render() {
      const  {usd, euro, current}  = this.state.currencies;
        return (
            <div>
                {`${usd}, ${euro}, ${current}`}
            </div>

        );
    }

}
export default CurrencyWidget;

//https://openexchangerates.org/

//https://exchangeratesapi.io/