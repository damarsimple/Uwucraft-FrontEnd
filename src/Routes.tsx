/* eslint-disable no-use-before-define */
import React from 'react'
import { Route } from 'react-router'
import Dashboard from './components/Dashboard/Dashboard'
import Integrations from './components/Dashboard/Integrations'
import Players from './components/Dashboard/Players'
import Reports from './components/Dashboard/Reports'
import Sidebar from './components/Dashboard/Sidebar'
import Home from './components/Home/Home'
import Login from './components/Login'
import Stalk from './components/Player/Stalk'
import Register from './components/Register'
import Cart from './components/Shop/Cart'
import Checkout from './components/Shop/Checkout'
import Shop from './components/Shop/Shop'
import Itemlookup from './components/Shop/ItemLookup'
import Transaction from './components/Dashboard/Transaction'
const Routes = () => {
  return (
    <React.Fragment>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route
        path="/shop"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={Shop} exact />
            <Route
              path={`${url}/item/:itemid`}
              component={Itemlookup}
            />
            <Route path={`${url}/cart`} component={Cart} />
            <Route
              path={`${url}/checkout`}
              component={Checkout}
            />
          </>
        )}
      />
      <Route
        path="/dashboard"
        render={({ match: { url } }) => (
          <div style={{ display: 'flex' }}>
            <Sidebar />
            <Route path={`${url}/`} component={Dashboard} exact />
            <Route
              path={`${url}/transaction`}
              component={Transaction}
              exact
            />
            <Route path={`${url}/users`} component={Players} />
            <Route path={`${url}/reports`} component={Reports} />
            <Route
              path={`${url}/system`}
              component={Integrations}
            />
          </div>
        )}
      />
      <Route
        path="/player"
        render={({ match: { url } }) => (
          <div>
            <Route path={`${url}/stalk`} component={Stalk} />
          </div>
        )}
      />
    </React.Fragment>
  )
}

export default Routes
