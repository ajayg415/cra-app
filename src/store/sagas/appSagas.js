import { put } from 'redux-saga/effects';
import axios from 'axios'

import { storeData } from  '../actions'

function* fetchData(action){
  try {
    const resp = yield axios.get('http://localhost:5000/username')
    yield put(storeData(resp))
  } catch(error) {
    console.log('App error: ', error)
  }
}

export default fetchData;
