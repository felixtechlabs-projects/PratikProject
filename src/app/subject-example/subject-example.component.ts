import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.css']
})
export class SubjectExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    of(1, 2, 3).pipe(map(x => x * 2)).subscribe(res => {
      console.log(res);
    })

    of(10, 20, 30, 40, 50).pipe(filter(x => x > 25)).subscribe(res => {
      console.log(res);
    })


    of(10, 20, 30, 40, 50).pipe(filter(x => x > 25), map(x => x * 2)).subscribe(res => {
      console.log(res);
    })

    of(10, 20, 30, 40, 50).pipe(map(x => x * 2), filter(x => x > 25) ).subscribe(res => {
      console.log(res);
    })
  }

}
