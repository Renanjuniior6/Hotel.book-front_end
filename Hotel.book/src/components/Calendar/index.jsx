import React, { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./styles.css"

export function Calendario() {
  const [date, setDate] = useState()

  return (
    <div className="app">
      <h2>Escolha uma data</h2>
      <div>
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="text-center">
        <span>Data selecionada: </span>
        {date
          ? date.toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })
          : "Nenhuma data"}
      </div>
    </div>
  )
}
