import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { items: state.items }
}
//here we specify which part of state we want this component to have access to 
//aka we are providing the items prop to this component

export default connect(mapStateToProps)(App)
//connect function is synced to (listens to every change in) the store and calls
//mapStateToProps when a change in state occurs
//we specify which component (App) to connect the state to

// export default App; no longer needed