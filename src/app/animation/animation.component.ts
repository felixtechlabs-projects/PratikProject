import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openclose', [
      state('open', style({
        backgroundColor: "red",
        border: "5px",
        height: "300px"
      })),
      state('close', style({
        backgroundColor: "green",
        border: "2px",
        height: "100px"
      })),
      transition('open => close', [
        animate('1s')
      ]),
      transition('close => open', [
        animate('2s')
      ])
    ])
  ]
})
export class AnimationComponent implements OnInit {

  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

// Deployment
// Authentication => uid
// Database => CRUD