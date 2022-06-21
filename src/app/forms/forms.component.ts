import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder, private router: Router) { 
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-z]')])
    // })

    this.loginForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern('[A-Z][a-z]')]]
    })
  }

  ngOnInit(): void {
  }

  onTapOfSubmit(loginForm: FormGroup) {
    this.isSubmitted = true;
    console.log(loginForm.valid);
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    if(loginForm.valid) {
      this.router.navigateByUrl("http");
    }

  }
}
