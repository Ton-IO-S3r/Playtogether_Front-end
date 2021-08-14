import React from 'react'
import './actionbtn.scss'
const UnirseBtn = ({action}) => {
  return (
    <div className="text-center sticky-md-top">
      <button type="button" className="action-btn btn ml-auto mr-auto" >{action}</button>
    </div>
  )
}

export default UnirseBtn
