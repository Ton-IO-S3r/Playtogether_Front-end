import { toast } from 'react-toastify';
const notifyWarning = (text)  =>{
    toast.warn(`${text}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};

const notifySuccess = (text,autoClose)  =>{
    toast.success(`${text}`, {
        position: "top-right",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
};



export  {notifyWarning,notifySuccess}