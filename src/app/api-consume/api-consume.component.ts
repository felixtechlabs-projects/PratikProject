import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-consume',
  templateUrl: './api-consume.component.html',
  styleUrls: ['./api-consume.component.css']
})
export class ApiConsumeComponent implements OnInit, OnDestroy {

  postArray: Post[] = [];
  subs: Subscription;
  constructor(private apiservice: ApiService) { 
    let self = this;
    this.subs = this.apiservice.fetchAllPosts().subscribe(data => {
      self.postArray = data as Post[]; // type casting
    })

    this.apiservice.postMethod().subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
    var j = "10";
    var n = Number(j); // type casting from string to number
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
