import { Component } from "react";
import './TimeWidget.scss';

interface TimeType {
    ISOCode: string,
    days: [],
    months: [],
    localTime: string
    
}

class TimeWidget extends Component<TimeType> {

    //days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
    time_offsets = {
        US: -5,
        UA: 2,
        AE: 4,
        FR: 1,
        CA: -5,
        GB: 0,
        AU: 11,
        DE: 1,
        BY: 3
    };

   

    state = {
        day: {
            day: 0,
            date: 0,
            month: 0,
            year: 0,
        },

        time: {
            hour: 0,
            min: 0,
            sec: 0,
        },
        
        timezone:0, 
    }

    componentDidMount() {
        this.getDay();
        this.getTime(this.state.timezone);
    }

      componentDidUpdate(prevProps) {

        if(prevProps !== this.props) {

         this.setState({timezone: this.time_offsets[this.props.ISOCode]})   

        }
        setTimeout((tz = this.state.timezone) => (this.getTime(tz)), 1000);
    }

    addZero = (n) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    getTime = (tz) => {
    
        const now = new Date().getTime();
        const corr_time = Number(now+(tz*60*60*1000));
        const today =  new Date(corr_time);
    
        const _time = {
            hour: today.getUTCHours(),
            min: today.getMinutes(),
            sec: today.getSeconds(),
        }

        this.setState({ time: _time });
    }

    getDay = () => {
        const today = new Date();
        const _day = {
            day: today.getDay(),
            date: today.getDate(),
            month: today.getMonth(),
            year: today.getFullYear(),
        }

        this.setState({ day: _day });
    }

    render() {
      
        const { hour, min, sec } = this.state.time;
        const { day, date, month, year } = this.state.day;
        const {days, months,   localTime} = this.props;
       

        return (
            <div className="date-time ">
                <div className="date-time-container">
                    <div className="title">{localTime}</div>
                    <div className="date-time-inner">
                        <div className="date">{`${days[day]} ${date} ${months[month]} ${year}`}</div>
                        <div className="time">{`${this.addZero(hour)}:${this.addZero(min)}:${this.addZero(sec)}`}</div>
                    </div>
                </div>

            </div>
        )
    }

};

export default TimeWidget;
