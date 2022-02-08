import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export function UncontrolledForm(){
  const navigate = useNavigate()

  const refYear = useRef()
  const refTitle = useRef()
  const refPlot = useRef()

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
            <input ref={refYear} className="form-control" type="number" id="year"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="title" className="form-label col-sm-2 text-end">
            <strong>Title</strong>
          </label>
          <div className="has-validation col-sm-9">
            <input ref={refTitle} className="form-control" type="text" id="title"/>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="plot" className="form-label col-sm-2 text-end">
            <strong>Plot</strong>
          </label>
          <div className="has-validation col-sm-9">
            <textarea ref={refPlot} className="form-control" type="number" id="plot"/>
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