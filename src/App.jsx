import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeesList"
import { TicketList } from "./components/tickets/TicketList"
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path="/tickets" element={<TicketList />} />
    </Routes>
  )
}     
//<Route path="/customers" element={<CustomerList />}/>
//<Route path="/employees" element={<EmployeeList />}/>