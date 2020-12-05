import React, { useContext, useEffect } from "react"
import { LocationContext } from './LocationProvider'
import { Location } from './Location'

//create LocationList function to get the array of locations from the location provider
export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    
    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
        {
            locations.map(location => <Location key={location.id} location={location} />)
        }
        </div>
    )
}