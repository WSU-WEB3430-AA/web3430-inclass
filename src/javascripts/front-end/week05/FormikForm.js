import { useFormik } from "formik"
import React, { useContext, useState } from "react"
import DatePicker from "react-datepicker"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import * as yup from 'yup'
import { FormsContext } from "./FormsData"

function VHelp({message}){
  return <div className="invalid-feedback">{message}</div>
}

const validationSchema = yup.object({
  year: yup.number().required().min(1900).max(new Date().getFullYear()),
  title: yup.string().required(),
  plot: yup.string().required(),
  releaseDate: yup.date().required()
})
export function FormikForm(){
  let {formsData, setFormsData} = useContext(FormsContext)
  const navigate = useNavigate()

  const {handleSubmit, handleChange, values, errors, setFieldValue} = useFormik({
    initialValues: formsData ? formsData : {
      year: new Date().getFullYear(),
      title: '',
      plot: '',
      releaseDate: ''
    },
    validationSchema,
    onSubmit(values){
      setFormsData(values)
      toast.success('Successfully submitted')
      navigate('../')
    }
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
    

  //   let data = {
  //     year: refYear.current.value,
  //     title: refTitle.current.value,
  //     plot: refPlot.current.value
  //   }

  //   console.log(data)
  //   toast.success("Submitted successfully")
  //   navigate("../")
  // }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Example validated Formik form</h1>
        <div className="mb-3 row">
          <label htmlFor="year" className="form-label col-sm-2 text-end">
            <strong>Year</strong>
          </label>
          <div className="has-validation col-sm-9">
            <input value={values.year} className={`form-control ${errors.year ? 'is-invalid' : ''}`} type="number" id="year" onChange={handleChange}/>
            <VHelp message={errors.year}></VHelp>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="title" className="form-label col-sm-2 text-end">
            <strong>Title</strong>
          </label>
          <div className="has-validation col-sm-9">
            <input value={values.title} className={`form-control ${errors.title ? 'is-invalid' : ''}`} type="text" id="title" onChange={handleChange}/>
            <VHelp message={errors.title}></VHelp>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="plot" className="form-label col-sm-2 text-end">
            <strong>Plot</strong>
          </label>
          <div className="has-validation col-sm-9">
            <textarea value={values.plot} className={`form-control ${errors.plot ? 'is-invalid' : ''}`} id="plot" onChange={handleChange}/>
            <VHelp message={errors.plot}></VHelp>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="releaseDate" className="form-label col-sm-2 text-end">
            <strong>Release Date</strong>
          </label>
          <div className="has-validation col-sm-9">
            <div className={errors.releaseDate ? 'is-invalid' : ''}>
              <DatePicker className={`form-control ${errors.releaseDate ? 'is-invalid' : ''}`} id="release_date" selected={values.releaseDate} onChange={date => setFieldValue("releaseDate", date)}/>
            </div>        
            <VHelp message={errors.releaseDate}/>
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