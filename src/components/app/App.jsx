import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Store from '../../class/store/Store'
import { ROUTER } from '../../class/constants'

import {
  LoginScreen, MainScreen, ProjectScreen, RegisterScreen
} from '../screens'

function App() {
  return (
    <React.StrictMode>
      <Provider store={Store}>
        <BrowserRouter>
          <div className='App'>
            <Switch>
              <Route path={ROUTER.LOGIN} component={LoginScreen} />
              <Route path={ROUTER.REGISTER} component={RegisterScreen} />
              <Route path={ROUTER.MAIN} component={MainScreen} />
              <Route
                path={`${ROUTER.PROJECT}/:id(\\d+)`}
                render={props => <ProjectScreen {...props}/>}                
              />
              <Route component={RegisterScreen} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default App;
