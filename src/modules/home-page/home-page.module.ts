import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CyclicSliderModule } from '../cyclic-slider/cyclic-slider.module';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CyclicSliderModule,
    QRCodeModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
