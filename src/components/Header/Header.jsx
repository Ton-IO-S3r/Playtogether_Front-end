import React, { Fragment } from 'react'
import Navbar from 'components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <Fragment>
            <header>
                <Navbar/>
            </header>
        </Fragment>
    )
}

export default Header
