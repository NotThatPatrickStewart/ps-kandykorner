import React, { useContext, useEffect } from "react"
import { locationContext } from './LocationProvider'

//create LocationList function to get the array of locations from the location provider
export const LocationList = () => {
    const { locations, getLocations } = useContext(locationContext)
    
    useEffect(() => {
        getLocations()
    })
    return locations
}