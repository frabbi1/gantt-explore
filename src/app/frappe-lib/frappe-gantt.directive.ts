import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: '[frappeGantt]'
})
export class FrappeGanttDirective implements OnInit, OnDestroy{

  constructor(private element: ElementRef) { }

  ngOnDestroy(): void {
    this.element.nativeElement = null;
  }

  ngOnInit(): void {
  }

}
