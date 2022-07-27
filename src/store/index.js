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
  selectedListPresentation = 'Пагинация'
  historyTotalPages = 0
  historyTotalElements = 0
  selectedNumberOfElements = 20
  historyCurrentPage = 1
  selectedSort = 'Сортировка'
  selectedSortIsDisabled = false;
  sortParam = ''

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

  async showHistory(page, size) {
    this.displayHistory = !this.displayHistory
    if(this.displayStat){
      this.displayStat = !this.displayStat
    }
    await this.fetchHistoryPaged(page, size)
  }

  async fetchHistoryPaged(page, size, sort) {

    switch(sort){
      case 'По дате (возр)': this.sortParam = 'dateTime'
        break
      case 'По дате (убыв)': this.sortParam = 'dateTime,desc'
        break
    }

    const result = await CurrencyService.getHistoryPaged(page, size, this.sortParam)
    runInAction(() => {
      if(this.selectedListPresentation === 'Пагинация'){
        this.history = result.data.content
      } else if (this.selectedListPresentation === 'Бесконечная прокрутка'){
        this.history = [...this.history, ...result.data.content]
      }
      this.historyTotalElements = result.data.totalElements
      this.historyTotalPages = result.data.totalPages
      this.historyTotalPages = result.data.totalPages
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

  setSelectedListPresentation(param){
    this.selectedListPresentation = param
  }

  setSelectedNumberOfElements(param){
    this.selectedNumberOfElements = param
  }

  setHistoryCurrentPage(param){
    this.historyCurrentPage = param
  }

  setSelectedSort(param) {
    this.selectedSort = param
  }

  setSelectedSortIsDisabled(param) {
    this.selectedSortIsDisabled = param
  }
}

export default new Store()