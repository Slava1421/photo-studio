import { Component, OnInit } from '@angular/core';
import { WebSocketPhotoService } from '../../services/web-socket-photo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})
export class HomePageComponent implements OnInit {

  imgBase64: string;

  constructor(private socket: WebSocketPhotoService) {

  }

  ngOnInit(): void {
    this.convertImgToBase64('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', (dataUrl) => {
      console.log('RESULT:', dataUrl);
      this.imgBase64 = dataUrl;
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

  click() {
    this.socket.closeConnect();
  }
}
