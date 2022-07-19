import {makeAutoObservable, runInAction} from "mobx";
import CurrencyService from "../api/CurrencyService";

class Store {
  charCodeFrom = 'У меня есть'
  sumToConvert = ''
  charCodeTo = 'Хочу приобрести'
  sumConverted = ''
  dateTime = ''
  timer = null
  displayHistory = false
  displayStat = false
  history = []
  stat = []

  constructor(){
    makeAutoObservable(this)
  }

  setCharCodeFrom(param){
    this.charCodeFrom = param
  }

  setSumToConvert(param){
    this.sumToConvert = param
  }

  setCharCodeTo(param){
    this.charCodeTo = param
  }

  setSumConverted(param){
    this.sumConverted = param
  }

  setDateTime(param){
    this.dateTime = param
  }

  setTimer(param){
    this.timer = param
  }

  resetTimer(){
    clearTimeout(this.timer)
  }

  setDisplayHistory(param){
    this.displayHistory = param
  }

  setDisplayStat(param){
    this.displayStat = param
  }

  setStat(param){
    this.stat = param
  }

  async showHistory() {
    this.displayHistory = !this.displayHistory
    if(this.displayStat){
      this.displayStat = !this.displayStat
    }
    const result = await CurrencyService.getHistory()
    runInAction(() => {
      this.history = result.data
    })
  }

  async showStat() {
    this.displayStat = !this.displayStat
    if(this.displayHistory){
      this.displayHistory = !this.displayHistory
    }
    const result = await CurrencyService.getStat()
    runInAction(() => {
      this.stat = result.data
    })
  }

  reset() {
    this.sumToConvert = 0
    this.sumConverted = ''
  }
}

export default new Store()