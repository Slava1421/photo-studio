import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyclicSliderComponent } from './components/cyclic-slider/cyclic-slider.component';



@NgModule({
  declarations: [CyclicSliderComponent],
  exports: [CyclicSliderComponent],
  imports: [
    CommonModule
  ]
})
export class CyclicSliderModule { }
