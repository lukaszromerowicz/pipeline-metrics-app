import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Tile, { TileLoader } from '../Tile'

const fetchApplication = async (id, setApplication, setLoading) => {
    try{
        let response = await axios.get('http://localhost:2000/applications/' + id)
        const application = response.data
        setApplication(application)
        setLoading(false)
    }catch (error) {
        console.log('who cares')
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