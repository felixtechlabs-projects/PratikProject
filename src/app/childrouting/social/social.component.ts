import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  receivedId = "";
  
  constructor(private actRoute: ActivatedRoute) { 
    this.actRoute.params.subscribe(value => {
      this.receivedId = value["id"];
    })
  }

  ngOnInit(): void {
  }

}
