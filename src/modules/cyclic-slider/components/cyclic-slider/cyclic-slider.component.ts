import { Component, AfterViewInit, ViewChild, ElementRef, Input, QueryList, ContentChildren, forwardRef, AfterContentInit } from '@angular/core';
import { ISection } from 'src/modules/home-page/models/section';
import { SlideItemDirective } from '../../directives/slide-item.directive';

@Component({
  selector: 'app-cyclic-slider',
  templateUrl: './cyclic-slider.component.html',
  styleUrls: ['./cyclic-slider.component.scss'],
  host: {
    class: 'slider'
  }
})
export class CyclicSliderComponent implements AfterViewInit, AfterContentInit {

  @ViewChild('slider') sliders: ElementRef;
  @Input() height: number = 250;

  @ContentChildren(SlideItemDirective) slideInputs: QueryList<SlideItemDirective>;

  sections: SlideItemDirective[];

  startSlidePosTransformVH = 0;
  activateAnimation = false;

  indexSection: number = 0;

  ngAfterContentInit(): void {
    this.sections = this.slideInputs.toArray();
  }

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
