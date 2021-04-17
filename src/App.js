import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/app.scss'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
    return (
        code ? <Dashboard code={code} /> : <Login />
    )
}

export default App
