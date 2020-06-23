import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebSocketPhotoService } from 'src/modules/home-page/services/web-socket-photo.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent {

  @Output() ok = new EventEmitter<string>();
  @Output() close = new EventEmitter();
  imgBase64: string;
  constructor(private socket: WebSocketPhotoService) {
    socket.getDataSocket().subscribe((data: string) => {
      this.imgBase64 = data;
    });
  }

  convertImgToBase64(url: string, callback: Function): void {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
      var reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  onOk(): void {
    this.ok.next('OK');
  }

  onClose(event: any): void {
    this.close.next();
  }

  reset(): void {
    this.imgBase64 = '';
  }

}
