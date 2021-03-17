import { useState, useEffect } from "react";
import "./TimeWidget.scss";

const TimeWidget = (props: any) => {
  const [cur_day, setCurDay]: any = useState({
    day: 0,
    date: 0,
    month: 0,
    year: 0,
  });

  const [time, setTime]: any = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const [timezone, setTimezone]: any = useState({
    timezone: 0,
  });

  const time_offsets = {
    US: -5,
    UA: 2,
    AE: 4,
    FR: 1,
    CA: -5,
    GB: 0,
    AU: 11,
    DE: 1,
    BY: 3,
  };

  const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  };

  const getTime = (tz) => {
    const now = new Date().getTime();
    const corr_time = Number(now + tz * 60 * 60 * 1000);
    const today = new Date(corr_time);

    const _time = {
      hour: today.getUTCHours(),
      min: today.getMinutes(),
      sec: today.getSeconds(),
    };

    setTime(_time);
  };

  const getDay = () => {
    const today = new Date();
    const _day = {
      day: today.getDay(),
      date: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear(),
    };

    setCurDay(_day);
  };

  const setNewTimeZone = () => {
    setTimezone(time_offsets[props.ISOCode]);
  };

  useEffect(() => {
    setNewTimeZone();
    getDay();
    setTimeout((tz = timezone) => getTime(tz), 1000);
  }, [time]);

  const { hour, min, sec } = time;
  const { day, date, month, year } = cur_day;
  const { days, months, localTime } = props;

  return (
    <div className="date-time ">
      <div className="date-time-container">
        <div className="title">{localTime}</div>
        <div className="date-time-inner">
          <div className="date">{`${days[day]} ${date} ${months[month]} ${year}`}</div>
          <div className="time">{`${addZero(hour || 0)}:${addZero(
            min || 0
          )}:${addZero(sec || 0)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default TimeWidget;
