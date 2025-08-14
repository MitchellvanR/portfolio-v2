import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css'
})
export class Navigation {
  @Input() activeSectionIndex!: number;
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() activeLanguage: 'NL' | 'EN' = 'NL';

  @Output() sectionChange = new EventEmitter<number>();

  sections = [
    {text: 'Home', target: "targetSplash"}, 
    {text: 'About me', target: "targetAbout"}, 
    {text: 'Services', target: "targetServices"}, 
    {text: 'Skills', target: "targetSkills"}, 
    {text: 'Experience', target: ""}, 
    {text: 'In development', target: ""}, 
    {text: 'Contact', target: ""}]

  constructor(private scroller: ViewportScroller) {}

  get isSplash(): boolean {
    return this.activeSectionIndex === 0;
  }

  scrollToSection(index: number) {
    this.scroller.scrollToAnchor(this.sections[index].target)
    this.sectionChange.emit(index)
  }
}
