import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Student } from '../interfaces/student.interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) {}

  getStudents() {
    return this.http.get<Student[]>("http://localhost:8080/college/students");
  }

  loginStudent(student: Student) { 
    return this.http.post<Student>("http://localhost:8080/college/login",student);
  }

  logoutStudent(student: Student) {
    return this.http.post<Student>("http://localhost:8080/college/logout",student);
  }
}
