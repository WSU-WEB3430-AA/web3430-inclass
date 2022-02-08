import React, { useContext } from "react"
import { InClassContext } from "../App"
import {User} from './User'
export function Users({list, page, searchUsers, sortBy, changePage}){
  let {secret} = useContext(InClassContext)
  return (
    <div className="container">
      <h3 className="display-5 pb-2">GitHub Users</h3>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Type here to search" onChange={searchUsers}/>
        </div>
        <div className="col-4">
          <select className="form-select" onChange={(e) => {sortBy(e.target.value)}}>
            <option defaultValue=""> Sort user by:</option>
            <option value="login">Login</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>
      <hr />
      <div>
        {
          list.map((u, i) => {
            if(Math.floor(i / 10) == page)
              return <User key={i} user={u}/>
          })
        }
      </div>
      <hr />
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {
           Array.from(Array(Math.ceil(list.length / 10)).keys()).map(p => {
             return (
               <li key={p} className={p == page ? "page-item active" : "page-item"}>
                <a className="page-link" onClick={(e) => changePage(p)}>{p + 1}</a>
               </li>
             )
           }) 
          }
        </ul>
      </nav>
      <p>{secret}</p>
    </div>
  )
}