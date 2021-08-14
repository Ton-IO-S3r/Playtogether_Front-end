import React, { Fragment } from 'react'
import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Header/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
            <header>
                <Navbar/>
                <Hero/>

            </header>
    )
}

export default Header
