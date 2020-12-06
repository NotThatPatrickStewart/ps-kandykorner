import React from "react"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__storeAddress">Works at: {location.address}</div>
        <div className="employee__manager"> {employee.manager}</div>
        <div className="employee__fullTime"> {employee.fullTime}</div>
        <div className="employee__hourlyRate">Hourly Rate: ${employee.hourlyRate}</div>
    </section>
)