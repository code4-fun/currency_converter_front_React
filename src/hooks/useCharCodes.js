import CurrencyService from "../api/CurrencyService";
import {useState} from "react";

export const useCharCodes = (selectedCharCode) => {
  const [charCodes, setCharCodes] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const fetchCharCodes = async () => {
    try{
      setIsFetching(true)
      const result = await CurrencyService.getCurrencies()
          .then(res => res.data)
      const modifiedResult = [{value: selectedCharCode, disabled: true}, ...[...result].map(item => {
        return {
          value: item
        }
      })]
      setCharCodes(modifiedResult)
    } finally {
      setIsFetching(false)
    }
  }

  return [charCodes, fetchCharCodes, isFetching]
}