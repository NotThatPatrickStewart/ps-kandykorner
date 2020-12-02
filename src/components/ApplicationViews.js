import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"

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