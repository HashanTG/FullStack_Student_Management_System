import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/students`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};
