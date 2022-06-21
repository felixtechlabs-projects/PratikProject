import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchAllPosts() {
    return this.http.get<[Post]>("https://jsonplaceholder.typicode.com/posts");
  }

  postMethod() {
    var obj = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    return this.http.post('https://jsonplaceholder.typicode.com/posts', obj);
  }
}
