import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { fetchData } from './store/actions'

const App = ({ dispatchFetchData, userData }) => {
  const [user, setUser]  = useState({})
  useEffect(() => {
    dispatchFetchData()
  },[])
  console.log(userData)
  return (
    <div className="App container">
      <header className="App-header">
        {userData &&
        `Welcome ${userData.lastName}, ${userData.firstName}`}
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.dataReducer.username.data
})

const mapDispatchToProps = dispatch => ({
  dispatchFetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
