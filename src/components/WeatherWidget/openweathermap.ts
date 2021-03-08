
import axios from 'axios';

const _url = 'https://api.openweathermap.org/data/2.5/weather';
const _appid = 'cc5e998123b73611c364f52344b6c422';


const getCityWeather = async (city: string, url = _url, appid = _appid) => {
 const res = await axios.get(url, {
    params: {
      appid: appid,
      q: city,
    },
  });
  
  return res;
};
export default getCityWeather;