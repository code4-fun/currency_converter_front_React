import axios from "axios";

export default class CurrencyService{
  static async getCurrencies(){
    return await axios.get('https://conv-back2.herokuapp.com')
  }

  static async convert(from, to, amount){
    return await axios.get('https://conv-back2.herokuapp.com/convert', {
      params:{
        curfrom: from,
        curto:to,
        amount:amount
      }
    })
  }

  static async getHistory(){
    return await axios.get('https://conv-back2.herokuapp.com/history')
  }

  static async getStat(){
    return await axios.get('https://conv-back2.herokuapp.com/stat')
  }

  static async getHistoryPaged(page, size){
    return await axios.get('https://conv-back2.herokuapp.com/history/paged', {
      params: {
        page: page,
        size: size
      }
    })
  }
}