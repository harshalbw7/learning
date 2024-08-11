import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import * as M from 'materialize-css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  student: Student = {
    name: '',
    email: '',
    password: '',
    status: ''
  }; 

  constructor(private router: Router) {}

  ngOnInit(): void {

    const session = localStorage.getItem("session");
    this.student = JSON.parse(session); 
    
    document.addEventListener("DOMContentLoaded", () => {
      const element = document.querySelectorAll(".dropdown-trigger");
      M.Dropdown.init(element, {
        hover: true,
        constrainWidth: true,
        coverTrigger: false
      });
    });
  }  

  logout() {
    if(confirm('Are you sure you want to logout ? ')){
      localStorage.removeItem("session");
      this.router.navigate(['']);
      window.location.reload();
    }
  }
}
