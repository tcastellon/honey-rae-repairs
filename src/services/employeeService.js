export const getAllEmployees = (userId) => {
    return fetch(`http://localhost:8088/employees?userId=${userId}&_expand=user&_embed=employeeTickets`).then((res) => res.json())
}