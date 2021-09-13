import './actionbtn.scss'
const ActionBtn = ({action, btn_type, btn_context, btn_width, btn_disable, btn_mt, clic_func}) => {
  
  return (
    <div className="text-center w-100">
      <button 
        type={btn_type} 
        className={`action-btn align-self-center mt-${btn_mt} btn ml-auto mr-auto ${btn_context} btn-w-${btn_width}`} 
        disabled={btn_disable}
        onClick={clic_func}
      >
        {action}
      </button>
    </div>
  )
}

ActionBtn.defaultProps ={
  action: "Aceptar", 
  btn_type: "button", 
  btn_context: "accept", 
  btn_width:"200", 
  btn_mt:'4',
  btn_disable:false,
}

export default ActionBtn
