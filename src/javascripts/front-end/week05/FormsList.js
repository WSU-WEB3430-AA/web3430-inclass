import React from "react"
import { Link } from "react-router-dom"

export function FormsList() {
  return (
    <div className="container">
      <h1>Form examples</h1>
      <ul>
        <li><Link to="uncontrolled">Example Uncontrolled Form</Link></li>
        <li><Link to="controlled">Example Controlled Form</Link></li>
        <li><Link to="formik">Exampe Validated Formik Form</Link></li>
      </ul>
    </div>
  )

}