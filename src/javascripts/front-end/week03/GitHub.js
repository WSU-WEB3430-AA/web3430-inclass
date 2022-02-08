import React, { useState } from "react"

import initial_users from './data.json'
import { Users } from "./Users"

export function GitHub(){
  let [users, setUsers] = useState(initial_users)
  let [page, setPage] = useState(0)

  const searchUsers = (e) => {
    setPage(0)
    let results = initial_users.filter(u => u.login.indexOf(e.target.value) != -1)
    setUsers(results)
  }

  const sortBy = (field)=>{
    if(field === 'id'){ // For sorting by numbers
      users.sort((a, b) => a[field] - b[field])
    }else if(field === 'login'){ // For sorting by strings
      users.sort((a, b) => a[field].localeCompare(b[field]))
    }

    setPage(0)
    setUsers([...users])
  }
  return <Users list={users} page={page} searchUsers={searchUsers} sortBy={sortBy} changePage={setPage}></Users>
}