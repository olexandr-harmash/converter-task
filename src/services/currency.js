import axios from 'axios';

class CurrencyService {
    constructor(){}

  async fetchCurrency() {
      //without errors check
    const res = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    return res.data
  }

  async fetchUSDToEUR() {
    //without errors check
  const res = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  const cur = res.data.filter(v=>v.cc=="USD" || v.cc=="EUR")
  return cur
}
}

export default new CurrencyService;
