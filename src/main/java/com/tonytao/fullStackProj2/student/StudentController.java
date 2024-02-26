package com.tonytao.fullStackProj2.student;

import com.tonytao.fullStackProj2.exception.ApiRequestException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("students")
public class StudentController {
    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }
    @GetMapping
    public List<Student> getAllStudents(){
        throw new ApiRequestException("Oops, cannot get all students with custom exception");
//            throw new IllegalStateException("Oops, cannot get all students");
            //return studentService.getAllStudents();
    }
//    @ExceptionHandler(IllegalStateException.class)
//    public ResponseEntity<Map<String, Object>> handleIllegalStateException(IllegalStateException e) {
//        Map<String, Object> body = new HashMap<>();
//        body.put("timestamp", System.currentTimeMillis());
//        body.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());
//        body.put("error", HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
//        body.put("message", e.getMessage());  // 将IllegalStateException的消息放入响应体中
//        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
//    }

    @PostMapping
    public void addNewStudent(@RequestBody @Valid Student student) {
        studentService.addNewStudent(student);
    }
}
