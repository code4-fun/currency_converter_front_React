import store from '../store'
import CurrencyService from "../api/CurrencyService";

export const convert = async () => {
  if(store.charCodeFrom !== 'У меня есть' && store.charCodeTo !== 'Хочу приобрести'
      && parseInt(store.sumToConvert) > 0 && store.sumToConvert !== ''
      && store.sumToConvert !== undefined){
    const result = await CurrencyService
        .convert(store.charCodeFrom, store.charCodeTo, store.sumToConvert)
        .then(res => res.data)
    store.setSumConverted(result.sumAfterConversion)
    store.setDateTime(result.dateTime)
  }
}

export const sumToConvertHandler = (event) => {
  store.setSumToConvert(event.target.value)
  store.resetTimer()
  if (event.target.value !== '' && event.target.value !== 0 &&
      store.charCodeFrom !== 'У меня есть' && store.charCodeTo !== 'Хочу приобрести') {
    store.setTimer(setTimeout(() => {
      convert().then(r => r)
    }, 2000))
  }
}