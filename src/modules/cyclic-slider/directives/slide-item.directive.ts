import { Directive, TemplateRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlideItem]'
})
export class SlideItemDirective {

  constructor(public tpl : TemplateRef<any>) {
   }

}
