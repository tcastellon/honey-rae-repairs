import { useState, useEffect } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { User } from "../../users/User"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees ] = useState([])
    
    useEffect(() => {
        getAllEmployees().then(employeeArray => {
            setEmployees(employeeArray)
        })
    }, [])

    return <div className="employees">
        {employees.map(employeeObj => {
            return <User user={employeeObj} key={employeeObj.id}/>
        })}
    </div>
}