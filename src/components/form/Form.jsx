import React from 'react';
import SelectedCharCodeFrom from "../selectedCharCode/SelectedCharCodeFrom";
import SelectedCharCodeTo from "../selectedCharCode/SelectedCharCodeTo";
import {observer} from "mobx-react-lite";
import SumConverted from "../sumConverted/SumConverted";
import SumToConvert from "../sumToConvert/SumToConvert";
import store from "../../store";

const Form = observer(() => {
  return (
      <div className='card'>
        <SelectedCharCodeFrom />
        <SumToConvert />
        <SelectedCharCodeTo />
        <SumConverted />

        <button className="btn" onClick={() => store.showHistory()}>Показать историю</button>
        <button className="btn" onClick={() => store.showStat()}>Показать статистику за неделю</button>
        <button className="btn" onClick={() => store.reset()}>Reset</button>
      </div>
  );
});

export default Form;