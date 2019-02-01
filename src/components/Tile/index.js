import React from 'react'
import ContentLoader from 'react-content-loader'
import dayjs from 'dayjs'
import CircularProgressbar from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Tile = ({ name, lastPublish, numberOfBuilds }) => {
    const diffInMilliseconds = dayjs().diff(dayjs(lastPublish))
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
    const diffInDays = Math.floor(diffInHours / 24)

    const percentage = (diffInHours / (7 * 24)) * 100

    return <section>
            <h1>{name}</h1>
            <div style={{ width: '200px' }}>
                <CircularProgressbar
                    percentage={percentage}
                    text={`${diffInDays} days ${diffInHours} hours`}
                    styles={{
                            text: {
                                fontSize: "10px",
                                fill: percentage > 10 ? percentage > 25 ? '#eb3b5a' : '#fa8231' : '#20bf6b'
                            },
                            path: {
                                stroke: percentage > 10 ? percentage > 25 ? '#eb3b5a' : '#fa8231' : '#20bf6b'
                            }
                        }
                    }
                />
            </div>
        </section> 
}
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