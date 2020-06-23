import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DialogService {

  dialogAction$ = new Subject();
  
  openDialog() {
    this.dialogAction$.next();
  }
}
