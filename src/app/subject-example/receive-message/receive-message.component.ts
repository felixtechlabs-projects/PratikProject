import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubService } from '../sub.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-receive-message',
  templateUrl: './receive-message.component.html',
  styleUrls: ['./receive-message.component.css']
})
export class ReceiveMessageComponent implements OnInit, OnDestroy {

  receivedMsg: string;
  subscription: Subscription;

  constructor(private subService: SubService) { 
    this.receivedMsg = "";
    let self = this;
    this.subscription = this.subService.sendAsObservable().subscribe(data => {
      self.receivedMsg = data as string;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
