const axios = require("axios");

module.exports = async () => {
  try {
    let url =
      "https://api.nomics.com/v1/currencies/ticker?key=f2e7b74a0d3bc25cf7716f59b23550e6&ids=BTC,ETH&interval=1m&convert=USD&per-page=2&page=1";
    const resp = await axios.get(url);

    return {
      error: false,
      data: { BTC: resp.data[0].price, ETH: resp.data[1].price },
    };
  } catch (error) {
     return { error: true };
  }
};
