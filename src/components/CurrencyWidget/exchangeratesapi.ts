import axios from 'axios'

const _url = 'https://api.exchangeratesapi.io/latest';
const _cur = 'USD';

const getCurrency = async (url = _url, cur = _cur) => {
 const res = await axios.get(url, {
    params: {
      base: cur,
    },
  });
  
  return res;
};

export default getCurrency;

