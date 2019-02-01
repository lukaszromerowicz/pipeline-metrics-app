import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { TileLoader } from './components/Tile'
import Application from './components/Application'
import axios from 'axios'
import { API_URL } from './config'
import './styles/styles.scss'

const fetchApplication = async (setLoading, setApplications) => {
  try {
    let response = await axios.get(`${API_URL}/applications`)

    const { Application } = response.data
    setApplications(Application)
    setLoading(false)
  } catch (error) {

  }
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [applications, setApplications] = useState(undefined)

  useEffect(() => {
    fetchApplication(setLoading, setApplications)
  }, [])
  
  return (
    <main>
      <div>
        {loading 
          ? <TileLoader/>
          : applications.map(app => <Application id={app.id} />)
        }
      </div>
    </main>
  )
}

render(<App/>, document.getElementById('app'))