import { AuthState } from './'
import { IUser } from '@/interfaces'
import Cookies from 'js-cookie'

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SET_BRAND_URL,
  AUTH_SET_QRCODE
} from '@/consts/ActionType'

type AuthActionType = 
  | { type: AUTH_LOGIN, payload: IUser }
  | { type: AUTH_LOGOUT }
  | { type: AUTH_SET_BRAND_URL, payload: string }
  | { type: AUTH_SET_QRCODE, payload: string }

export const authReducer = ( state: AuthState, action: AuthActionType ): AuthState => {
  
  switch (action.type) {
    case AUTH_LOGIN:
      if (!Cookies.get('token')) Cookies.set('token', action.payload.jwt.token)
      return {
        ...state,
        user: action.payload
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        user: null,
      }
    case AUTH_SET_BRAND_URL:
      return {
        ...state,
        brand_url: action.payload
      }
    case AUTH_SET_QRCODE:
      return {
        ...state,
        qrcode: action.payload
      }
    default:
      return state
  }
}
