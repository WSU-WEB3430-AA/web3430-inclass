import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export function ControlledForm(){
  const navigate = useNavigate()

  const [year, setYear] = useState(2022)
  const [title, setTitle] = useState("")
  const [plot, setPlot] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    

    let data = {
      year: refYear.current.value,
      title: refTitle.current.value,
      plot: refPlot.current.value
    }

    console.log(data)
    toast.success("Submitted successfully")
    navigate("../")
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Example uncontrolled form</h1>
        <div className="mb-3 row">
          <label htmlFor="year" className="form-label col-sm-2 text-end">
            <strong>Year</strong>
          </label>
          <div className="has-validation col-sm-9">
            <input value={year} onChange={(e) => setYear(e.target.value)} className="form-control" type="number" id="year"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="title" className="form-label col-sm-2 text-end">
            <strong>Title</strong>
          </label>
          <div className="has-validation col-sm-9">
            <input value={title}  onChange={(e) => setTitle(e.target.value)}className="form-control" type="text" id="title"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="plot" className="form-label col-sm-2 text-end">
            <strong>Plot</strong>
          </label>
          <div className="has-validation col-sm-9">
            <textarea value={plot}  onChange={(e) => setPlot(e.target.value)} className="form-control" type="number" id="plot"/>
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-9 offset-sm-2">
            <button type="submit" className="btn btn-primary me-2">Submit</button>
            <button type="button" className="btn btn-danger me-2" onClick={() => navigate("../")}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}