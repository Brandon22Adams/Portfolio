import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Mobile } from '../services/mobile';

@Component({
  selector: 'app-carousel',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  public isMobile: boolean = false;

  constructor(mobileService: Mobile) {
    this.isMobile = mobileService.isMobileDevice();
  }

  @Input() public set images(images: Array<string>) {
    this.allImages = images;
    this.listLength = images.length - 1;
  };
  public allImages: Array<string> = [];
  public currentIndex = 0;
  public listLength = 999;

  public getAtIndex(index: number) {
    this.currentIndex = index;
  }

  public getPrev() {
    this.currentIndex = this.currentIndex === 0 ? 0 : this.currentIndex - 1;
  }

  public getNext() {
    this.currentIndex = this.currentIndex === this.listLength ? this.currentIndex : this.currentIndex + 1;
  }
}
