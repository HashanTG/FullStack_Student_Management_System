package com.example.student_management.service.impl;

import com.example.student_management.model.Student;
import com.example.student_management.repository.StudentRepository;
import com.example.student_management.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceimpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(long id) {
        Optional<Student> student = studentRepository.findById(id);
        if (student.isPresent()) {
            return student.get();
        } else {
            throw new RuntimeException("Student not found with id: " + id);
        }
    }

    @Override
    public Student updateStudent(Student student, long id) {
        Student existingStudent = studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        existingStudent.setFirstName(student.getFirstName());
        existingStudent.setLastName(student.getLastName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setDepartment(student.getDepartment());
        existingStudent.setYearOfEnrollment(student.getYearOfEnrollment());

        return studentRepository.save(existingStudent);
    }

    @Override
    public void deleteStudent(long id) {
        studentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        studentRepository.deleteById(id);
    }
}
