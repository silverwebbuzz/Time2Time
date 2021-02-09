import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
})
export class ExpandableComponent implements AfterViewInit {

  //@ViewChild('expandWrapper', null) expandWrapper : ElementRef;
  //@ViewChild("expandWrapper", { read: typeof ElementRef, static: false }) expandWrapper: ElementRef;

  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";

  currentHeight: number = 0;

  constructor(public renderer: Renderer2) { }

  ngAfterViewInit() {
    //console.log(this.expandWrapper.nativeElement);
    //this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

}
