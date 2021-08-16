import React from 'react'
import './actionbtn.scss'
const index = ({action}) => {
  return (
    <div className="text-center w-100">
      <button type="button" className="action-btn btn ml-auto mr-auto" >{action}</button>
    </div>
  )
}

export default index
