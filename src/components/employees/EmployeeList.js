import React, { useContext, useEffect } from "react";
import { Product } from "../products/Product";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import { LocationContext } from "../location/LocationProvider";


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
        .then(getEmployees)
    }, [])

    return (
        <div className="employees">
            <h1>Employees</h1>
            <button onClick={() => props.history.push("/employees/create")}>
                Add Employee
            </button>

            <article className="employeeList">
                {employees.map((employee) => {
                    const store = locations.find(
                        (location) => (
                            location.id === employee.locationId  
                ))
                console.log("locations:", locations)
               // console.log("fetch test:", location)
                console.log("store:", store)
                return (
                    <Employee
                        key={employee.id}
                        employee={employee}
                        location={store}
                    />
                )  
                })}
            </article>
        </div>
    )
}