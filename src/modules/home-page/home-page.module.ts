import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SectionComponent } from './components/section/section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CyclicSliderModule } from '../cyclic-slider/cyclic-slider.module';



@NgModule({
  declarations: [HomePageComponent, SectionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CyclicSliderModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
