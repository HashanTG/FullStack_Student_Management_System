import React, { useState, useEffect } from 'react';
import { fetchStudents, deleteStudent, addStudent, updateStudent } from '../api/studentApi';
import StudentForm from './StudentForm';
import { Student } from '../types/student';

const StudentListComponent: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

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

  const handleAdd = async (student: Omit<Student, 'id'>) => {
    try {
      await addStudent(student);
      setIsAdding(false);
      getStudents();
    } catch (err) {
      setError('Failed to add student. Please try again.');
    }
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
  };

  const handleUpdate = async (updatedStudent: Omit<Student, 'id'>) => {
    if (editingStudent) {
      try {
        await updateStudent(editingStudent.id, updatedStudent);
        setEditingStudent(null);
        getStudents();
      } catch (err) {
        setError('Failed to update student. Please try again.');
      }
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteStudent(id);
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
      {isAdding ? (
        <StudentForm onSubmit={handleAdd} onCancel={() => setIsAdding(false)} />
      ) : (
        <button className="btn btn-primary mb-3" onClick={() => setIsAdding(true)}>Add New Student</button>
      )}
      {editingStudent && (
        <div className="mb-3">
          <h3>Edit Student</h3>
          <StudentForm student={editingStudent} onSubmit={handleUpdate} onCancel={() => setEditingStudent(null)} />
        </div>
      )}
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
                    onClick={() => handleEdit(student)}
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
