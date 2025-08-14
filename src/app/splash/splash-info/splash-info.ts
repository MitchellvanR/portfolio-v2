import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash-info',
  imports: [],
  templateUrl: './splash-info.html',
  styleUrl: './splash-info.css'
})
export class SplashInfo {
  @Output() sectionChange = new EventEmitter<number>()

  constructor(private scroller: ViewportScroller) {}

  scrollToAbout() {
    this.scroller.scrollToAnchor("targetAbout")
    this.sectionChange.emit(1)
  }
}
