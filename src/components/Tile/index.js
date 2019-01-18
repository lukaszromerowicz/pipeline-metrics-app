import React from 'react'
import ContentLoader from 'react-content-loader'
import dayjs from 'dayjs'

const Tile = ({ name, lastPublish, numberOfBuilds }) => 
    <section>
        <h1>{name}</h1>
        <p>{dayjs(lastPublish).format('DD/mm/YYYY')}</p>
        <p>{numberOfBuilds}</p>
    </section> 

export const TileLoader = () => 
    <section>
        <ContentLoader 
            height={160}
            width={400}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
        >
            <rect x="4" y="18" rx="3" ry="3" width="378" height="24.77" /> 
            <rect x="3" y="68" rx="3" ry="3" width="325.5" height="10.94" /> 
            <rect x="3" y="91" rx="3" ry="3" width="325.5" height="10.94" />
        </ContentLoader>
    </section>

export default Tile