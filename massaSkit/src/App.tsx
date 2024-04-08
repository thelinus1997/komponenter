import React, { useState } from "react"
import "./App.css"
import MeatballMenu from "./components/meatballMenu/MeatballMenu"
import SearchBtn from "./components/SearchBtn/SearchBtn"
import BentoMenu from "./components/BentoMenu/BentoMenu"
import DatePicker from "./components/DatePicker/DatePicker"
import { DragAndDrop } from "./components/DragDrop/DragAndDrop"
const App = () => {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }
  return (
    <>
      <MeatballMenu />
      <SearchBtn />
      <BentoMenu />
      <DatePicker
        labelText={"Pick your date!"}
        buttonText="Select Date!"
        minDate="2024-04-10"
        maxDate="2025-05-14"
        setDateChosed={setDateChosed}
        datePickerStyleRow={false}
      />
      <DragAndDrop />
      <p>Date chosed: {date}</p>
    </>
  )
}

export default App
