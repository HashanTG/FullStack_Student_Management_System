import axios from 'axios';
import { Student } from '../types/student';

const API_BASE_URL = 'http://localhost:8080';

export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/students`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const addStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/students`, student);
    return response.data as Student;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

export const updateStudent = async (id: number, student: Omit<Student, 'id'>): Promise<Student> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/students/${id}`, student);
    return response.data as Student;
  } catch (error) {
    console.error('Error updating student:', error);
    throw error;
  }
};

export const deleteStudent = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/api/students/${id}`);
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
