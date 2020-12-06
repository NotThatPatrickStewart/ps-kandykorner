import React, { useContext, useRef, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"

export const EmployeeForm = (props) => {
    const { employees, addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)
    const manager = useRef(null)
    const fullTime = useRef(null)
    const hourlyRate = useRef(null)

    useEffect(() => {
        getLocations()
    }, [])

    const constructNewEmployee = () => {
        const locationId = parseInt(location.value)

        if (locationId === 0) {
        window.alert("Select location")
        } else {
            addEmployee({
                name: name.value,
                manager: manager.value,
                fullTime: fullTime.value,
                hourlyRate: hourlyRate.value,
                locationId

            })
            .then(() => props.history.push("/employees"))
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee Name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee Name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeLocation">Assign to Location: </label>
                    <select defaultValue="" id="employeeLocation" ref={location} className="form-control" />
                    <option value="0">Select Location</option>
                    {locations.map(employee => (
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                    ))}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeManager">Is Employee a Manager? </label>
                    <select defaultValue="" id="employeeManager" ref={manager} className="form-control" />
                    <option value="0">Manager?</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    {employees.map(employee => (
                        <option key={employee.id} value={employee.id}>
                            {employee.manager}
                        </option>
                    ))}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeHours">Is Employee Full Time? </label>
                    <select defaultValue="" id="employeeHours" ref={fullTime} className="form-control" />
                    <option value="0">Full Time?</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                    {employees.map(employee => (
                        <option key={employee.id} value={employee.id}>
                            {employee.fullTime}
                        </option>
                    ))}
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRate">Hourly Rate for Employee: </label>
                    <input type="text" id="employeeRate" ref={hourlyRate} required autoFocus className="form-control" placeholder="Employee Rate" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={event => {
                    event.preventDefault()
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                    Save Employee
                </button>
        </form>
    )

}