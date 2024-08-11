import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm : FormGroup;

  student: Student =  {
    name: '',
    email: '',
    password: '',
    status: ''
  }

  studentResponce: Student =  {
    name: '',
    email: '',
    password: '',
    status: ''
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group( {
       email: ['',[Validators.required, Validators.email]],
       password: ['',[Validators.required, Validators.minLength(5)]],
    });
  }

  constructor(private fb:FormBuilder, private login: LoginService, private router: Router) {

    login.loginStudent(this.studentResponce).subscribe(student => {
      this.studentResponce = student;
      console.log(this.studentResponce);

      const session = localStorage.getItem('session');

      if(session != null) {
        this.router.navigate(['/home']);
      }
    });

    console.log(this.studentResponce);
  }


  loginStudent() {

    this.student.email = this.loginForm.get('email').value;
    this.student.password = this.loginForm.get('password').value;
    
    this.login.loginStudent(this.student).subscribe(responce => {

      this.studentResponce = responce;
      console.log(this.studentResponce);
      this.student =  {
        name: '',
        email: '',
        password: '',
        status: ''
      }

      console.log("status : "+this.studentResponce.status);

      if(this.studentResponce.status === 'success') {
        const session = localStorage.setItem("session", JSON.stringify(this.studentResponce));
        this.router.navigate(['/home']);
        window.location.reload();
      }
      if(this.studentResponce.status === 'failed') {
        alert("Abe bhidu, data barabar dal");
      }
    },
    error => {
      
      console.error('Error during login', error);
      alert("Abe bhidu, data barabar dal");
    });
  }
}
