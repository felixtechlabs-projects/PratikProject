import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  flag = true;
  city = "Pune";
  arr = [10, 20, 30, 40, 50];
  userArray = [
    {
      id: 1,
      name: "Pratik K."
    },
    {
      id: 2,
      name: "Snehal D."
    },
    {
      id: 3,
      name: "Sagar B."
    },
    {
      id: 4,
      name: "Rohan J."
    },
    {
      id: 5,
      name: "Neha P."
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.flag = !this.flag;
  }

}
