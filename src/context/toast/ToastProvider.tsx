'use client'

import { useReducer, useEffect, ReactNode } from 'react'
import { toast } from 'react-toastify'

import { ToastContext } from './ToastContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const toastAlert = (type: string,title: string, description?: ReactNode) => {
    switch(type) {
      case 'error': return toast.error({ title, description });
      case 'info': return toast.info({ title, description });
      case 'success': return toast.success({ title, description });
      case 'warning': return toast.warning({ title, description });
      default: return toast({ title, description });
    }
  }

  return (
    <ToastContext.Provider
      value={{
        toast: toastAlert
      }}
    >
      { children }
    </ToastContext.Provider>
  )
}
