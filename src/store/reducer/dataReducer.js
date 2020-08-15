import actionTypes from '../actions/actionTypes'

let initialData = {
  username: {}
}

const dataReducer = (state = initialData, action) => {
  switch(action.type) {
    case actionTypes.STORE_DATA:
      return {...state,
        username: action.payload
      }
    default:
      return state;
  }
}

export default dataReducer;