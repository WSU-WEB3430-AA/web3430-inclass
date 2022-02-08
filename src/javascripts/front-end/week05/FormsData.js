import React, { createContext, useState } from "react"
import { Outlet } from "react-router-dom"
export const FormsContext = createContext()

export function FormsData (){
  const [formsData, setFormsData] = useState({
    year: 2009,
    title: "Avatar",
    plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    releaseDate: new Date('2009-12-09')
  })

  return (
    <FormsContext.Provider value={ {formsData, setFormsData} }>
      <Outlet/>
    </FormsContext.Provider>
  )
}