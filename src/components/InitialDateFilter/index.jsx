import './initialdatefilter.scss'
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { Component } from "react";
import { useState } from "react";

const InitialDateFilter = ({fromValue, toValue}) => {
  const today = new Date()
  const [date, setDate] = useState([today])
  
  return (
    <Flatpickr 
      value={date}
      ref={fromValue}
      placeholder='Elige una fecha...'
      onChange={(selected_date) => {
        setDate(selected_date)
        if(toValue.current.props.value[0] < fromValue.current.props.value[0]){
          setDate(toValue.current.props.value[0])
        }else{
          setDate(selected_date)
        }   
      }} 
      className="date-pick w-100"
      options={{
        dateFormat:"d-m-Y",
        minDate: 'today'
      }}
    />
  )
}

export default InitialDateFilter