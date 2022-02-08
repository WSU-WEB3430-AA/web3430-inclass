import React, { useContext, useState } from 'react'
import {FaSortAlphaDown} from 'react-icons/fa'
import { InClassContext } from '../App'

let hobbies = [
  {name: 'Play tennis', order: 2}, 
  {name: 'Play video games', order: 3}, 
  {name: 'Hike', order: 4},
  {name: 'Run', order: 1}, 
  {name: 'Walk', order: 5}
]

function CellInATable(props){
  return <td>{props.value}</td>
}

function RowInATable(props){
  return (
    <tr>
      <CellInATable value={props.obj.name}/>
      <CellInATable value={props.obj.order}/>
    </tr>
  ) 
}
export function TableOfHobbies(){
  let {secret} = useContext(InClassContext)
  let [list, setList] = useState(hobbies)
  let [sortedBy, setSortedBy] = useState("")
  const sortBy = (field)=>{
    if(field === 'order'){ // For sorting by numbers
      list.sort((a, b) => a[field] - b[field])
    }else if(field === 'name'){ // For sorting by strings
      list.sort((a, b) => a[field].localeCompare(b[field]))
    } else if(field === "due_date"){ // For sorting by dates
      list.sort((a, b) => a[field].getTime() - b[field].getTime())
    }
    setSortedBy(field)
    setList([...list])
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th onClick={(e) => sortBy("name")}>NAME <FaSortAlphaDown style={{display: sortedBy === "name" ? "inline" : "none"}}></FaSortAlphaDown></th>
            <th onClick={(e) => sortBy("order")}>ORDER <FaSortAlphaDown style={{display: sortedBy === "order" ? "inline" : "none"}}></FaSortAlphaDown></th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(function(h, ndx){
              return <RowInATable key={ndx} obj={h}/>
            })
          }
        </tbody>
      </table>
      <p>{secret}</p>
    </>
  )
}
