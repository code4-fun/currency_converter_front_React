import axios from "axios";

export default class CurrencyService{
  static async getCurrencies(){
    return await axios.get('https://conv-back.herokuapp.com')
  }

  static async convert(from, to, amount){
    return await axios.get('https://conv-back.herokuapp.com/convert', {
      params:{
        curfrom: from,
        curto:to,
        amount:amount
      }
    })
  }

  static async getHistory(){
    return await axios.get('https://conv-back.herokuapp.com/history')
  }

  static async getStat(){
    return await axios.get('https://conv-back.herokuapp.com/stat')
  }
}