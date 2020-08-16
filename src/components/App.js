import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'

const App = ({dispatch}) => {
  useEffect(() => {
    async function disp() {dispatch(handleInitialData())}
    disp()
  }
  , [dispatch])

  return (
    <div className="App">
      Hello World
    </div>
  );
} ;

export default connect()(App)
