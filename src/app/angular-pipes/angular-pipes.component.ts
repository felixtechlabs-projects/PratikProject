import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  name = "Pratik"
  arr = ["C", "CPP", "Java", "Javascript", "Typescript", "Scala", "Angular", "ReactJS", "Express Js", "Node Js"];
  user = {
    id: 2,
    name: "ABC",
    address: {
      city: "Pune",
      pincode: 411207
    }
}
// dependency injection
  constructor(private commService: CommService) { 
    console.log("I am angular pipe component loaded successfully");
  }

  ngOnInit(): void {
  }

}
