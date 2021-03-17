import axios from "axios";

const getCurrency = async (
  cur = "USD",
  url = "https://v6.exchangerate-api.com/v6/453fd0477029c2ca002837e0/latest/"
) => {
  const res = await axios.get(url + cur, {
    params: {},
  });

  return res;
};

export default getCurrency;
