import axios from 'axios'

const getCurrency = async (cur = 'USD', url = 'https://v6.exchangerate-api.com/v6/081b46e91a52545e83bc2960/latest/', ) => {

 const res = await axios.get(url+cur, {
    params: {   
    },
  });
  
  return res;
};

export default getCurrency;

