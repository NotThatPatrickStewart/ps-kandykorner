import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { Route } from "react-router-dom";


export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                <Route exact path="/locations"
                render={(props) => <LocationList {...props} />}
                />
            </LocationProvider>
        </>
    )
}