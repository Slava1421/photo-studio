import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {

  @Input() title: string;
  @Input() background: string;
}
