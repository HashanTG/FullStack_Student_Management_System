import React from 'react';
const ListEmployeeComponent: React.FC = () => {
 const employees = [
 { id: 1, firstname: 'Sandip', lastname: 'Perera', email:'sandip@example.com' },
 { id: 2, firstname: 'Navod', lastname: 'Gunasinghe', email:'navod@example.com' },
 { id: 3, firstname: 'Amara', lastname: 'Senarath', email:'amara@example.com' },
 ];
 return (
 <div className="container mt-3">
 <h3 className="text-primary text-center fw-bold">Employee List</h3>
 <table className="table table-bordered table-striped">
    <thead className="table-dark">
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    {employees.map((employee) => (
        <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.email}</td>
        </tr>
    ))}
    </tbody>
 </table>
 </div>
 );
};
export default ListEmployeeComponent;