package com.example.student_management.repository;

import com.example.student_management.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // CRUD operations are automatically provided by JpaRepository
}
