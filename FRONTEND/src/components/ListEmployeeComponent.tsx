import React, { useState, useEffect } from 'react';
import { fetchStudents, deleteStudent } from '../api/studentApi';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  yearOfEnrollment: number;
}

const StudentListComponent: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getStudents = async () => {
    try {
      setLoading(true);
      const data = await fetchStudents();
      setStudents(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch students. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log(`Edit student with id: ${id}`);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id);
      // After successful deletion, refresh the student list
      getStudents();
    } catch (err) {
      setError('Failed to delete student. Please try again later.');
    }
  };

  if (loading) return <div>Loading students...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Year of Enrollment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.yearOfEnrollment}</td>
                <td>
                  <button 
                    className="btn btn-primary btn-sm me-2" 
                    onClick={() => handleEdit(student.id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentListComponent;
