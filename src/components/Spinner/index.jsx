import logo from 'assets/icons/PT_Logo_green.svg'
import './spinner.scss'

const SpinnerPT = (props) => {
  return (
    <div>
      <img className="loader"  src={logo} alt="logo-spin" />
      <p>Espera un momento...</p>
    </div>
      
  )
}

export default SpinnerPT
