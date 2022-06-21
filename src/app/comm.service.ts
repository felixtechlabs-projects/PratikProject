import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  arr = ["HTML", "CSS", "Bootstrap", "Javascript", "Typescript"];

  constructor() { 
    console.log("I am comm service loaded successfully.");
  }

  createObservable() {
    return new Observable(observer => {
      if (this.arr.length > 0) {
        observer.next(this.arr);
      } else {
        observer.error("No data found");
      }
      observer.complete();
    })
  }

}

/**
 * service => singleton file/class=> throughout project it referes single object
 * 
 * MVC (model, view, controller)
 * view => component
 * controller => service
 * 
 * Service + dependency Injection
 * service injects in component
 * 
 * communication between components 
 * RXJS => service code => service
 * Observables vs promise
 * subject+ behavioursubject
 * rxjs operators
 * 
 * HTTP => service
 * 
 * Async programming
 * 1) Promise
 * 2) Observables
 */