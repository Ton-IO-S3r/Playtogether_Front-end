import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './callActionBtn.scss'

const CallActionBtn = (props) => {
    const {to,text,className, onClick} = props
    return (
        <Fragment>
            <Link type="button" onClick={onClick} className={className} to={to}>{text}</Link>
        </Fragment>
    )
}

export default CallActionBtn
