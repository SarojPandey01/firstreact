import React from 'react'
import Myrouter from './Myrouter';
import './App.css';
import CartReducer from './redux/reducer/CartReducer';
import { legacy_createStore } from 'redux';//help to know the compiler that it is store
import { Provider } from 'react-redux';//to provide data from reducer to the components


const App = () => {
  const state = legacy_createStore(CartReducer)
  return (
    <>
    <Provider store={state}>

    <Myrouter/>

    </Provider>
    </>
  )
}

export default App