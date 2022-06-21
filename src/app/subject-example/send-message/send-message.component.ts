import { Component, OnInit } from '@angular/core';
import { SubService } from '../sub.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  msg: string;

  constructor(private subService: SubService) { 
    this.msg = "";
  }

  ngOnInit(): void {
  }

  send() {
    this.subService.sendMessage(this.msg);
    this.msg = "";
  }

  reset() {
    this.subService.resetMessage();
    this.msg = ""
  }
}
