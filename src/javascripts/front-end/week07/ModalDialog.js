import React, { useState } from "react"
import { toast } from "react-toastify"

function generateData(num){
  return Array.from(Array(num).keys()).map(i => {
    return {
      id: i,
      width: 100 * Math.random() + 1,
      height: 100 * Math.random() + 1,
      weight: 100 * Math.random() + 1
    }
  })
}

export function ModalDialog(){
  let [data, setData] = useState(generateData(15))

  const deleteRow = (r) => {
    data.splice(data.findIndex(e => e.id == r), 1)
    setData([...data])
    toast.warning('Succesfully deleted!')
  }
  return (
    <table className="container table">
      <thead>
        <tr>
          <th>#</th>
          <th>Width</th>
          <th>Height</th>
          <th>Weight</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(r => {
            return (
              <tr>
                <th>{r.id + 1}</th>
                <td>{r.width.toFixed(2)}</td>
                <td>{r.height.toFixed(2)}</td>
                <td>{r.weight.toFixed(2)}</td>
                <td>
                  <a className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#deleteRowModal_${r.id}`}>Delete</a>

                  <div class="modal fade" id={`deleteRowModal_${r.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          Are you sure you want to delete this row?
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteRow(r.id)}>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}