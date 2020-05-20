import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ISection } from 'src/modules/home-page/models/section';

@Component({
  selector: 'app-cyclic-slider',
  templateUrl: './cyclic-slider.component.html',
  styleUrls: ['./cyclic-slider.component.scss'],
  host: {
    class: 'slider'
  }
})
export class CyclicSliderComponent implements AfterViewInit {

  @ViewChild('slider') sliders: ElementRef;
  @Input() height: number = 50;

  sections: Array<ISection> = [
    { background: 'green', title: 'test1' },
    { background: 'red', title: 'test2' },
    { background: 'blue', title: 'test4' },
    { background: 'yellow', title: 'test5' },
    { background: 'brown', title: 'test6' }
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
        this.startSlidePosTransformVH = (this.sections.length - 1) * (-this.height);
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
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (this.height);

      setTimeout(() => {
        this.activateAnimation = true;
        this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-this.height);
      });

    } else {
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-this.height);
    }
  }

  scrollToSection(indexSection: number): void {
    if (this.activateAnimation || this.indexSection === indexSection) { return; }

    this.activateAnimation = true;
    this.indexSection = indexSection;
    this.startSlidePosTransformVH = (-this.height * indexSection);
  }

  prew(): void {
    if (this.activateAnimation) { return; }
    this.activateAnimation = true;
    this.indexSection--;

    if (this.indexSection < 0) {
      this.activateAnimation = false;
      const lastSection = this.sections.pop();
      this.sections.unshift(lastSection);
      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (-this.height);

      setTimeout(() => {
        this.activateAnimation = true;
        this.startSlidePosTransformVH = this.startSlidePosTransformVH + (this.height);
      });

    } else {

      this.startSlidePosTransformVH = this.startSlidePosTransformVH + (this.height);
    }

  }

}
