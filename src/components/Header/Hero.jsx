import React from 'react'
import './hero.scss'
import Button from 'components/Buttons/CallActionBtn'

const Hero = () => {
    return (
        <div className="">
            <div className="d-flex flex-column mt-5">
                <h1 className="title">Únete a un partido y conoce gente nueva!!</h1>
                <Button onClick={()=>{window.location.href = "/partidos/";}} text="Buscar Partidos"/>
                {/* <a type="button" className="btn align-self-center mt-lg-5 button-call-to-mobile">Busca Partidos</a> */}
            </div>
        </div>
    )
}

export default Hero
