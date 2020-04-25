import axios from 'axios'
import StoreHelper from './store-helper'


export default class AuthHelper {

  getToken (refreshToken) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/refresh`
    return axios.post(url, {refreshToken})
      .catch(err => {
        throw `Token has expired \n${err}`
      })
  }

  getData () {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/`
    return axios.post(url, null)
      .catch(err => {
        throw `Invalid token \n ${err}`
      })
  }

  adminLogin (adminPass) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/admin`
    return axios.post(url, {adminPass})
  }

  adminValidate (token) {
    const apiUrl = StoreHelper.apiUrl()
    const url = `${apiUrl}/auth/admin/validate`
    return axios.post(url, null)
  }
}