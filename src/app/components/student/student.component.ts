import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: any;
  student: Student;
  id: number;
  name: string;
  city: string;
  age:number;


  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.readStudent();
  }

  readStudent(){
      this.studentService.readStudents().subscribe(data =>{
        this.students = data
    })
  }

  createStudent(){
    this.student= {name: this.name, city: this.city, age: this.age}
    this.name =null
    this.city =null
    this.age =null
    this.studentService.createStudent(this.student).subscribe(data =>{
      this.readStudent()
    })
  }
  editStudent(studentId){
    this.studentService.readStudentById(studentId).subscribe(data =>{
     this.id= data[0].id
     this.name= data[0].name
     this.city= data[0].city
     this.age= data[0].age
  })
  }


  updateStudent(){
    this.student= {name: this.name, city: this.city, age: this.age}
    this.studentService.updateStudent(this.id,this.student).subscribe(data => {
      this.readStudent()
    })  
  }

  deleteStudent(studentId){
    this.studentService.deleteStudent(studentId).subscribe(data => {
      console.log(data)
      this.readStudent()
    })
  }
}
