import React from "react"

export function User({user}){
  return (
    <div className="row">
      <div className="col-1">
        <img src={user.avatar_url} alt={user.login} className="img-thumbnail" />
      </div>
      <div className="col-7">{user.login}</div>
      <div className="col-4 text-end">
        <button className="btn btn-primary">Visit</button>
        <button className="btn btn-warning">Following</button>
        <button className="btn btn-info">Followed by</button>
      </div>
    </div>
  )
}