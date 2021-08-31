import './initialdatefilter.scss'
import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { useState } from "react";

const InitialDateFilter = ({fromValue, toValue, handleDateChange}) => {
  const today = new Date()
  const [date, setDate] = useState([today])
  
  return (
    <Flatpickr 
      value={date}
      name="start_date"
      ref={fromValue}
      placeholder='Elige una fecha...'
      onChange={(selected_date) => {
        setDate(selected_date)
        if(toValue.current.props.value[0] < fromValue.current.props.value[0]){
          setDate([toValue.current.props.value[0]])
          
        }else{
          setDate(selected_date)
        }
        handleDateChange(fromValue.current.props.name,fromValue.current.props.value)
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