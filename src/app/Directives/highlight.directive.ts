import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{
  private isHightlighted : boolean = false;
  private initialColour: string ='lightblue';
  @Input() colour?:string;
  //TODO Host binding
  @HostBinding('style.backgroundColor') get textColour(){
    return this.isHightlighted?this.colour : this.initialColour;
  }
  constructor(private elm:ElementRef) {
    elm.nativeElement.style.backgroundColor='green';

  }
  @HostListener('click') onClick(){
    this.isHightlighted = !this.isHightlighted;
  }
  ngOnInit(){
    this.elm.nativeElement.style.backgroundColor = this.colour || "green";
  }
}
