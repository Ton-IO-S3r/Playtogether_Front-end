import  Button  from 'react-bootstrap/Button'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './callActionBtn.scss'

const CallActionBtn = (props) => {
    const {text,onClick, className, style} = props
    return (
        <Fragment>
            <Button  className={`align-self-center mt-4 btn-login ${className}`}  onClick={onClick} style={style} >{text}</Button>
        </Fragment>
    )
}

export default CallActionBtn
