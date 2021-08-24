import './actionbtn.scss'
const ActionBtn = ({action, btn_type, btn_disable}) => {
  
  return (
    <div className="text-center w-100">
      <button type={btn_type} className="action-btn align-self-center mt-4 btn ml-auto mr-auto" disabled={btn_disable}>{action}</button>
    </div>
  )
}

export default ActionBtn
