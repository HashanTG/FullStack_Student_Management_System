import { useState, useEffect } from 'react';
import { fetchStudents } from '../api/studentApi';


const StudentListComponent = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    getStudents();
  }, []);

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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentListComponent;
