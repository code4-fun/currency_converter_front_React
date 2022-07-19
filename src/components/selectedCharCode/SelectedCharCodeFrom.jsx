import React, {useEffect} from 'react';
import Select from "../ui/Select";
import store from "../../store";
import {observer} from "mobx-react-lite";
import {useCharCodes} from "../../hooks/useCharCodes";
import {convert} from "../../utils";

const SelectedCharCodeFrom = observer(() => {
  const [charCodes, fetchCharCodes, isFetching] = useCharCodes(store.charCodeFrom)

  useEffect(() => {
    fetchCharCodes()
        .then(data => {
          return data
        })
  }, [])

  return (
      <div>
        {
          isFetching
              ?
              <Select />
              :
              <Select
                  options = {charCodes}
                  selectedOption={store.charCodeFrom}
                  onChange = {i => {
                    store.setCharCodeFrom(i)
                    convert().then(res => {
                      return res
                    })
                  }}
              />
        }
      </div>
  );
});

export default SelectedCharCodeFrom;