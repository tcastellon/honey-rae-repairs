import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeesList"
import { TicketList } from "./components/tickets/TicketList"

export const App = () => {
  return <>
    <TicketList />
    <CustomerList />
    <EmployeeList />
  </>
}
