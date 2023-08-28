import { toast } from 'react-toastify'

const toastAlert = (type: string, message: string) => {
  switch(type) {
    case 'error':
    	toast.error(message)
    	break
    case 'info':
    	toast.info(message)
    	break
    case 'success':
    	toast.success(message)
    	break
    case 'warning':
    	toast.warning(message)
    	break
    default:
    	toast(message)
  }
}

export default toastAlert