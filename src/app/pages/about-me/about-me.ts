import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";
import { MatIconModule } from '@angular/material/icon';
import { Timeline } from './timeline/timeline';
import { Mobile } from '../../services/mobile';

@Component({
  selector: 'app-about-me',
  imports: [MatDivider, MatIconModule, MatCardModule, Timeline],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  public isMobile: boolean = false;

  constructor (mobileService: Mobile) {
    this.isMobile = mobileService.isMobileDevice();
  }

}
