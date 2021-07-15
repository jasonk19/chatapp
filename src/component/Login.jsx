import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import './Login.scss'

import firebase from 'firebase/app'
import { auth } from '../firebase'

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-card'>
        <h2>Welcome to SPARTAchat</h2>
        <div className='login-card-wrapper'>
          <div
            className='login-button google'
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
          >
            <GoogleOutlined /> Sign in with Google
          </div>  
        </div>
      </div>
    </div>
  )
}
