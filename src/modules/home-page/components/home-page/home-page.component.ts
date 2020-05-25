import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ISection } from '../../models/section';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})
export class HomePageComponent implements OnInit {

  imgBase64: string;

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

}
