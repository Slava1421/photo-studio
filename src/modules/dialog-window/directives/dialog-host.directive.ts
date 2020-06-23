import { Directive, OnInit, ComponentFactoryResolver, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { DialogWindowComponent } from '../components/dialog-window/dialog-window.component';
import { DialogService } from '../services/dialog.service';

@Directive({
  selector: '[appDialogHost]'
})
export class DialogHostDirective {

  @Output() ok = new EventEmitter();
  @Output() close = new EventEmitter();
  constructor(private view: ViewContainerRef, private factory: ComponentFactoryResolver,
    private dialogAction: DialogService) {
      dialogAction.dialogAction$.subscribe(() => {
        this.openDialog();
      });
     }

  openDialog(): void {
    const compFactory = this.factory.resolveComponentFactory(DialogWindowComponent);
    const ref = this.view.createComponent(compFactory);
    ref.instance.ok.subscribe((data) => {
      this.ok.next();
      this.closeDialog();
    });
    ref.instance.close.subscribe(() => {
      this.close.next();
      this.closeDialog();
    });
  }

  closeDialog(): void {
    this.view.clear();
  }

}
