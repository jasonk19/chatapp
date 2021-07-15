import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"

import {Chats} from "./component/Chats"
import {Login} from "./component/Login"

function App() {
  return (
    <div style={{ fontFamily: 'Ubuntu'}}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;