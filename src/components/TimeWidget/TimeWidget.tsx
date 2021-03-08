import { Component } from "react";
import './TimeWidget.scss';

class TimeWidget extends Component {

    //days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
     days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
        }
    }

    componentDidMount() {
        this.getDay();
        this.getTime();
    }

    componentDidUpdate() {
        setTimeout(this.getTime, 1000);
    }

    addZero = (n) => {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    getTime = () => {
        const today = new Date();
        const _time = {
            hour: today.getHours(),
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
            month: today.getMonth() + 1,
            year: today.getFullYear() - 2000,
        }

        this.setState({ day: _day });
    }

    render() {
        
        const { hour, min, sec } = this.state.time;
        const { day, date, month, year } = this.state.day;

        return (
            <div className = "date-time ">
                <div className = "date-time-container">
                <div className="title">Local Time</div>
                <div className="date-time-inner ">
                    <div className="date ">{`${this.days[day]}  ${date}-${this.addZero(month)}-${year}`}</div>
                    <div className="time ">{`${this.addZero(hour)}:${this.addZero(min)}:${this.addZero(sec)}`}</div>
                </div>
                </div>
                 
            </div>
        )
    }

};

export default TimeWidget;
