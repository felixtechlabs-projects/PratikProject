import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubService {
  subject = new Subject();

  constructor() { }

  sendMessage(msg: string) {
    this.subject.next(msg);
  }

  resetMessage() {
    this.subject.next("");
  }

  sendAsObservable() {
    return this.subject.asObservable();
  }
}
