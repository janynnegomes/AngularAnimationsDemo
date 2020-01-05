import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  animations: [
   
  ]
})
export class LoginComponent implements OnInit {

  isOpen = true;

  
  constructor() { }

  ngOnInit() {

    setTimeout(()=>{
      this.isOpen = false;
    },900);
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
