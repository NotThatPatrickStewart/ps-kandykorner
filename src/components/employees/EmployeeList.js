import React, { useContext, useEffect } from "react";
import { Product } from "../products/Product";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "./EmployeeProvider";


export const EmployeeList = (props) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getEmployees()
        .then(getLocations)
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
                        (l) => (
                            l.id === employee.locationId
                ))
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