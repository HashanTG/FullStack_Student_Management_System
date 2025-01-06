import React, { useState, useEffect } from 'react';
import { Student } from '../types/student';

interface StudentFormProps {
  student?: Student;
  onSubmit: (student: Omit<Student, 'id'>) => void;
  onCancel: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ student, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Omit<Student, 'id'>>({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    yearOfEnrollment: 0
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'yearOfEnrollment' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department</label>
        <input type="text" className="form-control" id="department" name="department" value={formData.department} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="yearOfEnrollment" className="form-label">Year of Enrollment</label>
        <input type="number" className="form-control" id="yearOfEnrollment" name="yearOfEnrollment" value={formData.yearOfEnrollment} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary me-2">{student ? 'Update' : 'Add'} Student</button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default StudentForm;
