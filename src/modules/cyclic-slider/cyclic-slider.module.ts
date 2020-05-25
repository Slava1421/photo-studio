import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyclicSliderComponent } from './components/cyclic-slider/cyclic-slider.component';
import { SlideItemDirective } from './directives/slide-item.directive';



@NgModule({
  declarations: [CyclicSliderComponent, SlideItemDirective],
  exports: [CyclicSliderComponent, SlideItemDirective],
  imports: [
    CommonModule
  ]
})
export class CyclicSliderModule { }
