import React from 'react'
import Navigator from './Navigator'
import Details from './Details'
import About from './About'
import Timeline from './Timeline'
import { useLocation } from 'react-router-dom'

const IpoDetails = ({ data }) => {

    const location = useLocation()

    console.log(location.state)
    const filterData = data.filter((val, index) => val.id == location.state.id)
    return (
        <div style={{ border: "1px solid gray", borderRadius: "10px" }}>
            <Navigator dataProps={filterData} id={location.state} />
            <Details dataProps={filterData} id={location.state} />
            <Timeline dataProps={filterData} />
            <About />
        </div>
    )
}

export default IpoDetails
