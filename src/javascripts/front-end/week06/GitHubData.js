import React, { createContext, useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"

export const GitHubContext = createContext()

export function GitHubData(){
  let [githubUsers, setGithubUsers] = useState()
  let {uid} = useParams()

  useEffect(() => {
    fetch(`https://api.github.com/users${uid && uid != 0 ? "?since=" + uid + "&per_page=100" : "?per_page=100"}`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json'          
      }
    })
    .then(response => response.json())
    .then(data => {console.log(data); setGithubUsers(data) })
    .catch(console.error)
  }, [uid])

  if(!githubUsers) return <>Loading...</>

  return (
    <GitHubContext.Provider value={{ githubUsers, setGithubUsers}}>
      <Outlet/>
    </GitHubContext.Provider>
  )
}