import React from "react"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__address">Address: {location.address}</h3>
        <div className="location__sqFootage">Square Footage: {location.sqFootage} square feet</div>
        <div className="location__handicapAccesible">{location.handicapAccesible}</div>
    </section>
)