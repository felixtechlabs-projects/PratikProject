import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sendMessage = "I am with you.";
  constructor() { }

  ngOnInit(): void {
  }

  messageReceived(value: string) {
    alert(value);
  }
}
