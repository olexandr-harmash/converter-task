import axios from 'axios';

class CurrencyService {
  constructor() {
    this.currencies = [];
  }

  async fetchCurrency(update) {
    const r = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    this.currencies = r.data;
    update();
  }

  getCurrency() {
    return this.currencies;
  }
}

export default new CurrencyService();
