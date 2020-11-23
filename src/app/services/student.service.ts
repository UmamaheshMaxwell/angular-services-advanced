import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  readStudents(){
   return this.httpClient.get("http://localhost:3000/api/student")
  }

  readStudentById(id){
    return this.httpClient.get(`http://localhost:3000/api/student/${id}`)
   }

  createStudent(student: Student){
    const header = {'content-type': 'application/json'}
    const body = JSON.stringify(student)
    console.log(body)
    return this.httpClient.post("http://localhost:3000/api/student", body, {headers: header})
  }

  updateStudent(id, student: Student){
    console.log(id)
    console.log(student)
    const header = {'content-type': 'application/json'} 
    const body = JSON.stringify(student)
    return this.httpClient.put(`http://localhost:3000/api/student/${id}`, body, {headers: header})
  }

  deleteStudent(id){
    return this.httpClient.delete(`http://localhost:3000/api/student/${id}`)
  }
}
