import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CyclicSliderModule } from '../cyclic-slider/cyclic-slider.module';
import { QRCodeModule } from 'angularx-qrcode';
import { WebSocketPhotoService } from './services/web-socket-photo.service';
import { DialogWindowModule } from '../dialog-window/dialog-window.module';
import { SvgDiagramModule } from '../svg-diagram/svg-diagram.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CyclicSliderModule,
    QRCodeModule,
    DialogWindowModule,
    SvgDiagramModule
  ],
  exports: [HomePageComponent],
  providers: [WebSocketPhotoService]
})
export class HomePageModule { }
