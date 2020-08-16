import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

const App = ({dispatch, loading}) => {
  useEffect(() => {
    async function disp() {dispatch(handleInitialData())}
    disp()
  }
  , [dispatch])

  return (
    <div className="App">
       {!loading && <Dashboard />}
    </div>
  );
} ;

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }

}

export default connect()(App)

