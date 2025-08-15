import { Component } from '@angular/core';
import { SkillCard } from './skill-card/skill-card';

@Component({
  selector: 'app-skills',
  imports: [SkillCard],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

}
