import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../week03/User"
import { GitHubContext } from "./GitHubData"

export function GitHubList(){

  const navigate = useNavigate()
  let {githubUsers, setGithubUsers} = useContext(GitHubContext)
  let [page, setPage] = useState(0)

  const bringNext100Users = () => {
    let max = Math.max(...githubUsers.map( u => u.id))
    navigate(`./../${(++max)}`)
  }

  return (
    <>
      <div className="container">
        <button className="btn btn-primary float-end" onClick={bringNext100Users}>Next 100</button>
        <h3 className='display-5 pb-2'>Github Users</h3>
        <hr />
        <div>
          {
            githubUsers.map((u, i) => {
              if(Math.floor(i / 10) == page){
                return (
                  <User key={i} user={u} index={i} />
                )
              }
            })
          }
        </div>
        <hr />
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            { 
              Array.from(Array(Math.ceil(githubUsers.length / 10)).keys()).map(p => {
                return (
                  <li key={p} className={p == page ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={ (e) => setPage(p) }>{p + 1}</a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
    </>
  )
}