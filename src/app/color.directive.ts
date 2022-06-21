import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() appColor = "";
  constructor(private eleRef: ElementRef) { 
    
  }

  ngOnInit(): void {
    this.eleRef.nativeElement.style.backgroundColor = this.appColor;
  }
}
