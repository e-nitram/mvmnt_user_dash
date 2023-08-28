'use client'

import { useReducer, useEffect, useContext, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import api from '@/plugins/axios'
import toast from '@/plugins/toast'
import { useTranslation } from '@/i18n/client'

import { IUser } from '@/interfaces'
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SET_BRAND_URL,
  AUTH_SET_QRCODE
} from '@/consts/ActionType'

import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

export interface AuthState {
  user: IUser | null
  error?: string
  brand_url: string
  qrcode?: string
}

const AUTH_INITIAL_STATE: AuthState = {
  user: null,
  error: '',
  brand_url: '',
  qrcode: ''
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const router = useRouter()
  const { t } = useTranslation()

  // Check if token is valid and login user again
  useEffect(() => {
    if (!Cookies.get('token')) return

    const token = Cookies.get('token') || ''

    checkToken(token)
  }, [])

  const checkToken = (token: string) => {
    api.get('/auth/users/me')
      .then((user) => {
        dispatch({
          type: AUTH_LOGIN,
          payload: user
        })
      })
      .catch(error => {
        Cookies.remove('token')
        dispatch({ type: AUTH_LOGOUT })
      })
  };

  const login = (data) => {
    api.post(`auth/users/login`, data)
      .then(res => {
        toast('success', t("AUTH.MESSAGE.SUCCESS_LOGIN"))
        dispatch({
          type: AUTH_LOGIN,
          payload: res.data
        });
        if(res.two_factor_enabled) {
          router.push('/signin/two_factor_auth')
        } else {
          router.push('/user/mypage')
        }
      })
      .catch(({ response }) => {
        if(response.status === 404)
          return toast('warning', t("AUTH.MESSAGE.USER_NOT_FOUND"))
        if(response.status === 400) {
          response.data.message.map(msg => toast('warning', msg))
          return
        }
      })
  }

  const signup = (data) => {
    api.post(`auth/users/signup`, data)
      .then(res => {
        toast('success', t("AUTH.MESSAGE.SUCCESS_SIGNUP"))
        router.push('/signup')
      })
      .catch(err => {
        toast('error', err.response.data.message)
      })
  }

  const emailVerify = (id: string, token: string) => {
    api.get(`auth/users/email-confirmation/${id}?token=${token}`)
      .then(res => {
        router.push('/signup/complete')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const enable2fa = () => {
    api.get(`auth/users/2fa/initiate`)
      .then(res => {
        dispatch({
          type: AUTH_SET_QRCODE,
          payload: res.data.otpAuthUrl
        })
      })
      .catch(err => {
        toast('error', err.response.data.message)
      })
  }

  const signOut = () => {
    Cookies.remove('token')
    dispatch({ type: AUTH_LOGOUT })
    router.refresh()
  }

  const setBrandUrl = (url: string) => dispatch({ type: AUTH_SET_BRAND_URL, payload: url })

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        signup,
        emailVerify,
        enable2fa,
        signOut,
        setBrandUrl
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}
