import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Cart, Food, Student } from '../interfaces/student.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  students: Student[] =  []; 
 
  filteredStudent: Student[] = []; 
  selectedStudent: string = '';

  carts: Cart[] = [];

  foods: Food[] = [
    {
      "foodId": 21,
      "foodName": "Biryani",
      "foodPrice": 120.0
    },
    {
      "foodId": 22,
      "foodName": "Pizza",
      "foodPrice": 150.0
    },
    {
      "foodId": 23,
      "foodName": "Icecream",
      "foodPrice": 60.0
    }
  ];

  constructor(private logiService: LoginService, private router: Router) {

    const session = localStorage.getItem('session');

      if(session == null) {
        this.router.navigate(['']);
      }

    logiService.getStudents().subscribe(data => {
      this.students = data; 
      this.filteredStudent = this.students;
    }); 
  }

  selected(name: string) {
    this.selectedStudent = name;
    this.filteredStudent = null;
  }

  filter() {
    if(this.selectedStudent === '') {
      this.filteredStudent = this.students;
    }
    else {
      this.filteredStudent = this.students.filter(student => student.name.toLowerCase().includes(this.selectedStudent.toLowerCase()));
    }
  }

  addStudent(food: Food, checked: boolean) {
    
    const cart: Cart = {
      cartId: food.foodId - 20,
      customerId: 1,
      foodId: food.foodId
    }

    if(checked) {
      console.log(cart);
      this.carts.push(cart);
    }
  }

  addToList() {
    console.log(this.carts);
  }
}
