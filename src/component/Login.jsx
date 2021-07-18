import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import './Login.scss'

import firebase from 'firebase/app'
import { auth } from '../firebase'

import chatImg from '../image/chatImage.svg'

import Typed from 'react-typed'

export const Login = () => {
  return (
    <div className='login'>
      <div className='login-wrapper'>
        <div className='inner-login-page'>
          <div className="inner-wrapper">
            <div className="left">
              <div className="title-wrapper">
                <h1>SPARTAchat</h1>
              </div>
              <div className='body-wrapper'>
                <p>Aplikasi chatting sederhana berbasis website yang menjadi tempat untuk <Typed
                  strings={[
                    'Berbicara',
                    'Berdiskusi',
                    'Bersantai'
                  ]}
                  typeSpeed={40}
                  backSpeed={60}
                  className='typed-text'
                  loop={true}
                >
                </Typed></p>
              </div>
              <div className="sign-in">
                <div
                className='login-button google'
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                <GoogleOutlined /> Sign in with Google
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image-wrapper">
                <img src={chatImg} alt='chat' className='image'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


