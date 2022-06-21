import { Component, OnInit } from '@angular/core';

interface Message {
  showMessage(msg: string): void;
}

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit, Message {
  // Global Variable
  name: string;
  years = 2014;
  arr = ["C", "C++", "HTML", "CSS"];
  isDisabled = true;
  image1 = "../../assets/david-marcu-78A265wPiO4-unsplash.jpg";

  constructor() { 
    this.name = "Felix It System";
    setTimeout(() => {
      this.isDisabled = false;
      this.image1 = "../../assets/man-walking-dog.jpeg";
    }, 5000);
  }

  ngOnInit(): void {
  }

  clickMe() {
    this.showMessage("I am button");
  }

  showMessage(msg: string): void {
    alert(msg);
  }

}
