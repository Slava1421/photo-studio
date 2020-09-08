import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDiagramComponent } from './components/svg-diagram/svg-diagram.component';



@NgModule({
  declarations: [SvgDiagramComponent],
  exports: [SvgDiagramComponent],
  imports: [
    CommonModule
  ]
})
export class SvgDiagramModule { }
