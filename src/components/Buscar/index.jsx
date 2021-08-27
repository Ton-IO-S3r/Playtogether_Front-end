import InitialDateFilter from 'components/InitialDateFilter'
import FinalDateFilter from 'components/FinalDateFilter'
import { useRef, useState, useEffect } from 'react'
import './buscar.scss'
import { Form } from 'react-bootstrap'
import ActionBtn from 'components/ActionBtn'



const Buscar = ({searchParams, setSearchParams}) => {
  const initialValue = useRef();
  const finalValue = useRef();
  const [formData,setFormData]=useState({})


  const handleSubmit = (e) =>{
    e.preventDefault()
    const params = {
      params: formData
    }
    
    setSearchParams(params)
    console.log(searchParams)
  }

  const handleSearchInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  return (
    <Form className="filter-games p-3 mx-auto" onSubmit={(e)=>handleSubmit(e)}>
      <h3 className="text-start">Busca tu partido ideal</h3>
      <hr />
      <div className="date-filter-container text-center d-flex flex-wrap justify-content-center w-100 mb-2">
        <h6 className="w-100 text-start">Fecha:</h6>
        <div className="date-picker-container p-1 mb-3 mx-1 start">
          <p className="text-start m-1">Desde:</p>
          <InitialDateFilter className="w-100" toValue={finalValue} fromValue={initialValue} name="start_date"/>
        </div>
        <div className="date-picker-container p-1 mb-3 mx-1 end">
          <p className="text-start m-1">Hasta:</p>
          <FinalDateFilter className="w-100" toValue={finalValue} fromValue={initialValue} name="end_date"/>
        </div>
      </div>
      <div className="type-category-filter-container d-flex flex-wrap justify-content-around mb-2">
        <div className="type-filter-container mb-2">
          <h6 className="text-start">Tipo de juego:</h6>
          <Form.Select size="sm" name="football_type" onChange={handleSearchInputChange}>
            <option value="5vs5">5 vs 5</option>
            <option value="6vs6">6 vs 6</option>
            <option value="7vs7">7 vs 7</option>
            <option value="11vs11">11 vs 11</option>
          </Form.Select>
        </div>
        <div className="category-filter-container mb-2">
          <Form.Group className="mb-2" controlId="formG">
            <Form.Label className="mb-0">Categoria:</Form.Label>
            <div className="mb-3">
              <Form.Check
                label="Masculino"
                name="category"
                type="radio"
                id={`radio-male`}
                value="masculino"
                checked={formData.category === "masculino"}
                onChange={handleSearchInputChange}
              />
              <Form.Check
                label="Femenino"
                name="category"
                type="radio"
                id={`radio-female`}
                value="femenino"
                checked={formData.category === "femenino"}
                onChange={handleSearchInputChange}
              />
              <Form.Check
                label="Mixto"
                name="category"
                type="radio"
                id={`radio-mixed`}
                value="mixto"
                checked={formData.category === "mixto"}
                onChange={handleSearchInputChange}
              />
            </div>
          </Form.Group>
        </div>
      </div>
      <div className="field-container mb-2">
        <h6 className="text-start">Cancha:</h6>
        <Form.Select size="sm w-100" name="cancha" onChange={handleSearchInputChange}>
          <option value="1">Field 1</option>
          <option value="2">Field 2</option>
          <option value="3">Field 3</option>
          <option value="4">Field 4</option>
        </Form.Select>
      </div> 
      <div className="w-100 text-center">
        <ActionBtn action="Filtrar" btn_type="submit" btn_disable={false} />
      </div>
      
    </Form>
    
  )
}

export default Buscar
