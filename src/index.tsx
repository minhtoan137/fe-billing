import * as React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/antd/index.less'
import './index.less'

import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root') as Element
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
