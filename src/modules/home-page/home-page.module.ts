import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SectionComponent } from './components/section/section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [HomePageComponent, SectionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
