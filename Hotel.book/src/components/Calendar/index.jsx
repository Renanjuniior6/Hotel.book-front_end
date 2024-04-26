import React, { useState } from "react"
import Calendar from "react-calendar"
import "./style.css"

export function Calendario() {
  const [date, setDate] = useState()

  return (
    <div className="app">
      <h1 className="text-center">Escolha uma data</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        <span className="bold">Data selecionada: </span>
        {date ? date.toDateString() : "Nenhuma data selecionada"}
      </div>
    </div>
  )
}
