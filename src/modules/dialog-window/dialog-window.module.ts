import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogWindowComponent } from './components/dialog-window/dialog-window.component';
import { DialogHostDirective } from './directives/dialog-host.directive';
import { QRCodeModule } from 'angularx-qrcode';
import { DialogService } from './services/dialog.service';



@NgModule({
  declarations: [DialogWindowComponent, DialogHostDirective],
  imports: [
    CommonModule,
    QRCodeModule
  ], 
  entryComponents: [DialogWindowComponent],
  exports:[DialogWindowComponent, DialogHostDirective],
  providers: [DialogService]
})
export class DialogWindowModule { }
