import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/form/Form.jsx'
import Button from './components/button/Button'
import Content from './components/content/Content'

function App() {

  return (
    <>

      <div className='all'>

        <div className='left'>
          <div className='violet'>
            <Content
              number="1"
              title="STEP 1"
              title1="YOUR INFO"
            />
            <Content
              number="2"
              title="STEP 2"
              title1="SELECT PLAN"
            />
            <Content
              number="3"
              title="STEP 3"
              title1="ADD-ONS"
            />
            <Content
              number="4"
              title="STEP 4"
              title1="SUMMARY"
            />
          </div>

        </div>



        <div className='right' >
          <h2>Pesonal info</h2>
          <p>please provide your name, your email and your phone number</p>
          <div>
            < Form name="Enter your Name" text="text" hold="e.g: Keza" />

            <Form name="Email Adress" text="text" hold="e.g: example@gmail.com" />
            <Form name="Phone number" text="number" hold="e.g: +2507888888" />
          </div>
          <div>
            <div className="buto">
              <button>Next Step</button>

            </div>
          </div>
        </div>

      </div>



    </>
  )
}

export default App
