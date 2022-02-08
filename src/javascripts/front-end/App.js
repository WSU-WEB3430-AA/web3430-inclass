import React, { createContext, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { TableOfHobbies } from "./week02/TableOfHobbies"
import { GitHub } from "./week03/GitHub"
import { FormsData } from "./week05/FormsData"
import { FormsList } from "./week05/FormsList"
import { UncontrolledForm } from "./week05/UncontrolledForm"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

export const InClassContext = createContext()

export function App() {
  let [secret, setSecret] = useState(987)

  return (
    <InClassContext.Provider value={{secret}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">WEB 3430</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/week02">Week 02: Table of hobbies</a></li>
                  <li><a className="dropdown-item" href="/week03">Week 03: GitHub Users</a></li>
                  <li><a className="dropdown-item" href="/week05/forms">Week 05: Forms</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route path="/week02" element={<TableOfHobbies></TableOfHobbies>}></Route>
          <Route path="/week03" element={<GitHub/>}></Route>
          <Route path="/week05/forms" element={<FormsData/>}>
            <Route index element={<FormsList/>}></Route>
            <Route path="uncontrolled" element={<UncontrolledForm/>}></Route>
            {/* <Route path="controlled" element={<ControlledForm/>}></Route>
            <Route path="formik" element={<FormikForm/>}></Route> */}
          </Route>
        </Routes>
      </Router>
    </InClassContext.Provider>
  )
}

/*

/week05/forms
    /               index
    /uncontrolled   uncontrolled form
    /controlled     controlled form 
    /formik         controlled form using formik


*/