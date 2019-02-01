import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tile, { TileLoader } from '../Tile'
import { API_URL } from '../../config'

const fetchApplication = async (id, setApplication, setLoading) => {
    try{
        let response = await axios.get(`${API_URL}/applications/${id}`)
        const application = response.data
        setApplication(application)
        setLoading(false)
    }catch (error) {
        console.log('ERROR:', error)
    }
}

const Application = ({ id }) => {
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [lastPublish, setLastPublish] = useState('')
    const [numberOfBuilds, setNumberOfBuilds] = useState('')

    const setApplication = ({ name, lastPublish, numberOfBuilds }) => {
        setName(name) 
        setLastPublish(lastPublish) 
        setNumberOfBuilds(numberOfBuilds)
    }

    useEffect(() => {
        fetchApplication(id, setApplication, setLoading)
    }, [])
    
    return (
        loading 
            ? <TileLoader/>
            : <Tile name={name} lastPublish={lastPublish} numberOfBuilds={numberOfBuilds} />
    )   
    
}

export default Application