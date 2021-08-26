import { toast } from 'react-toastify';
const notifyWarning = (text)  =>{
    toast.warn(`${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};

const notifySuccess = (text)  =>{
    toast.success(`${text}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
};



export  {notifyWarning,notifySuccess}