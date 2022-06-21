import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-childrouting',
  templateUrl: './childrouting.component.html',
  styleUrls: ['./childrouting.component.css']
})
export class ChildroutingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSocial() {
    // code
    this.router.navigateByUrl("/child-routing/social");
  }
}
