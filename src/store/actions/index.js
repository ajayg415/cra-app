import actionTypes from './actionTypes'

export const fetchData = () => ({
  type: actionTypes.FETCH_DATA
})

export const storeData = payload => ({
  type: actionTypes.STORE_DATA,
  payload
})

