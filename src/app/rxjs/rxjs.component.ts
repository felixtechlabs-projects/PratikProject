import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommService } from '../comm.service';
import { Subscription, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {
  languages = [];
  subscription: Subscription;
  
  constructor(private commService: CommService) {
    let self = this;
    this.subscription = this.commService.createObservable().subscribe(data => {
      self.languages = data as [];
    }, error => {
      console.log(error);
    }, () => {
      console.log("Completed");
    })
   }

  ngOnInit(): void {
    of(10, 20, 30).subscribe(ele => {
      // console.log(ele);
    });

    // Map Method of RXJS

    of(10, 20, 30).pipe(map(x => x*2)).subscribe(ele => {
      // console.log(ele);
    })

    // Filter Method Of RXJS

    of(10, 20, 30).pipe(filter(x => x > 15)).subscribe(ele => {
      // console.log(ele);
    })

    // Map + Filter

    of(10, 20, 30).pipe(map(x => x*2), filter(x => x > 15)).subscribe(ele => {
      // console.log(ele);
    })

    // filter + Map

    of(10, 20, 30).pipe(filter(x => x > 15), map(x=> x*2)).subscribe(ele => {
      console.log(ele);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
