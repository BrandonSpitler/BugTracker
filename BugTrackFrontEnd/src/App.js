import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainContainer from './container/MainContainer';
import MainCnfgContainer from './ConfigureNewBug/MainCnfgContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import rootReducer from './reducers/index'
import { createStore } from 'redux'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home/Home';
import NavbarHeader from './Navbar/NavbarHeader';

const store = createStore(
  rootReducer
)


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App fp-wrapper">

          <div className="sidebar">
            <Navbar></Navbar>
          </div>
          <div className='fp-panel-main'>
            <NavbarHeader></NavbarHeader>

            <header className="App-header">
              <Switch>
                <Route path="/NewCnfg/:id">
                  <MainCnfgContainer></MainCnfgContainer>
                </Route>
                <Route path="/WorkSpace">
                  <MainContainer></MainContainer>
                </Route>
                <Route path="/LoadCnfg/:id" render={(props) => <MainCnfgContainer {...props} />}>
                </Route>
                <Route path="/">
                  <Home></Home>
                </Route>
              </Switch>
              {/*<MainCnfgContainer></MainCnfgContainer>*/}
              { /* <MainContainer></MainContainer>--> */}
            </header>
          </div>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
