import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MainContainer from './container/MainContainer';
import MainCnfgContainer from './ConfigureNewBug/MainCnfgContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import { createStore } from 'redux'

const store = createStore(
  reducer
)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <MainCnfgContainer></MainCnfgContainer>
          { /* <MainContainer></MainContainer>--> */}
        </header>
      </div>
    </Provider>
  );
}

export default App;
