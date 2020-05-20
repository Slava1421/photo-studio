import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ISection } from '../../models/section';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('sliders') sliders: ElementRef;

  sections: Array<ISection> = [
    { background: 'green', title: 'test1' },
    { background: 'red', title: 'test2' },
    { background: 'blue', title: 'test3' },
    { background: 'yellow', title: 'test3' },
    { background: 'brown', title: 'test3' }
  ];

  startSlidePosTransformVH = 0;
  activateAnimation = false;

  indexSection: number = 0;

  ngAfterViewInit(): void {
    this.sliders.nativeElement.addEventListener('transitionend', () => {
      this.activateAnimation = false;

      if (this.indexSection === this.sections.length) {
        const lastSection = this.sections.pop();
        this.sections.unshift(lastSection);
        this.startSlidePosTransformVH = 0;
        this.indexSection = 0;
      } else if (this.indexSection < 0) {
        const firstSection = this.sections.shift();
        this.sections.push(firstSection);
        this.startSlidePosTransformVH = (this.sections.length - 1) * (-50);
        this.indexSection = this.sections.length - 1;
      }
    });
  }

  next() {
    if (this.activateAnimation) { return; }
    this.activateAnimation = true;
    this.indexSection++;

    if (this.indexSection === this.sections.length) {
      this.activateAnimation = false;
      const firstSection = this.sections.shift();
      this.sections.push(firstSection);
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (50);

      setTimeout(() => {
        this.activateAnimation = true;
        this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-50);
      });

    } else {
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-50);
    }
  }

  scrollToSection(indexSection: number): void {
    if (this.activateAnimation) { return; }

    this.activateAnimation = true;
    this.indexSection = indexSection;
    this.startSlidePosTransformVH = (-50 * indexSection);
  }

  prew(): void {
    if (this.activateAnimation) { return; }
    this.activateAnimation = true;
    this.indexSection--;

    if (this.indexSection < 0) {
      this.activateAnimation = false;
      const lastSection = this.sections.pop();
      this.sections.unshift(lastSection);
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-50);

      setTimeout(() => {
        this.activateAnimation = true;
        this.startSlidePosTransformVH = this.startSlidePosTransformVH + (50);
      });

    } else {

      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (50);
    }

  }
}
