import { useState, useEffect } from "react"
import { User } from "../users/User"
import { getNonStaffUsers } from "../../services/userService"
import "./Customers.css"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then(customerArray => {
            setCustomers(customerArray)
        })
    }, [])

    return <div className="customers">
        {customers.map(customerObj => {
            return (
                <Link to={`/customers/${customerObj.id}`}>
                    <User user={customerObj} key={customerObj.id}/>
                </Link>
            )
        })}
    </div>
}     