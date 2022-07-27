import React from 'react';
import SelectedCharCodeFrom from "../selectedCharCode/SelectedCharCodeFrom";
import SelectedCharCodeTo from "../selectedCharCode/SelectedCharCodeTo";
import {observer} from "mobx-react-lite";
import SumConverted from "../sumConverted/SumConverted";
import SumToConvert from "../sumToConvert/SumToConvert";
import store from "../../store";
import Button from "../ui/button/Button";

const Form = observer(() => {
  return (
      <div className='card'>
        <SelectedCharCodeFrom />
        <SumToConvert />
        <SelectedCharCodeTo />
        <SumConverted />

        <Button onClick={() => {
          store.showHistory().then(i => i)
          store.setHistoryCurrentPage(1)}}>
          Показать историю
        </Button>
        <Button onClick={() => store.showStat()}>Показать статистику за неделю</Button>
        <Button onClick={() => store.reset()}>Reset</Button>
      </div>
  );
});

export default Form;