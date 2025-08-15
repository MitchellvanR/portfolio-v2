import { Component, Input } from '@angular/core';
import { TRANSLATIONS } from '../translations';
import { ServiceCard } from './service-card/service-card';

@Component({
  selector: 'app-services',
  imports: [ServiceCard],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  @Input() activeLanguage: 'NL' | 'EN' = 'NL'

  get text() {
    return TRANSLATIONS[this.activeLanguage].services
  }
}
