import { useState } from "react"

import "./DatePicker.scss"

export type DatePickerTypes = {
  labelText: string
  buttonText: string
  minDate: string
  maxDate: string
  setDateChosed: (date: string) => void
  datePickerStyleRow: boolean
}

const DatePicker: React.FC<DatePickerTypes> = ({
  labelText,
  buttonText,
  minDate,
  maxDate,
  setDateChosed,
  datePickerStyleRow,
}) => {
  const [date, setDate] = useState("")

  const dateChosed = () => {
    setDateChosed(date)
    setDate("")
  }
  return (
    <div
      className={`DatePicker ${datePickerStyleRow ? "datePickerStyleRow" : ""}`}
    >
      <label htmlFor="DatePicker">{labelText}</label>
      <input
        type="date"
        name="datePicker"
        id="DatePicker"
        min={minDate}
        max={maxDate}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={dateChosed}>{buttonText}</button>
    </div>
  )
}

export default DatePicker
