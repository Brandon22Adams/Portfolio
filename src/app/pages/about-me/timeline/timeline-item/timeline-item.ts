import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from "@angular/material/divider";

export interface ITimelineItem {
  date: string;
  title: string;
  description: string;
  originalIndex?: number;
}

@Component({
  selector: 'app-timeline-item',
  imports: [MatCardModule, MatIconModule, MatDividerModule],
  templateUrl: './timeline-item.html',
  styleUrl: './timeline-item.scss',
})
export class TimelineItem {
  @Input() item!: ITimelineItem;
  @Input() position: 'left' | 'right' = 'left';
  @Input() isFirstItem: boolean = false;
  @Input() isMobile: boolean = false;

}
