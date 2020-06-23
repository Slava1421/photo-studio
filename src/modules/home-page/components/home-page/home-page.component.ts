import { Component, OnInit } from '@angular/core';
import { WebSocketPhotoService } from '../../services/web-socket-photo.service';
import { DialogService } from 'src/modules/dialog-window/services/dialog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],

})
export class HomePageComponent implements OnInit {

  imgBase64: string;
  docName: string;
  fileName: string;

  documents = [
    {
      name: 'doc1',
      caption: 'Паспорт-книжка',
      files: [
        {
          name: 'Стр. 1-2',
          statusUpload: false
        },
        {
          name: 'Стр. 3-4',
          statusUpload: false
        },
        {
          name: 'Стр. 5-6',
          statusUpload: false
        }
      ]
    },
    {
      name: 'doc2',
      caption: 'Витяг з державного реєстру',
      files: [
        {
          name: 'Лицьова сторінка',
          statusUpload: false
        },
        {
          name: 'Зворотна сторона',
          statusUpload: false
        }
      ]
    }
  ];

  constructor(private socket: WebSocketPhotoService, private dialogAction: DialogService) {
    socket.getDataSocket().subscribe((data: string) => {
      this.imgBase64 = data;
    });
  }

  ngOnInit(): void {
    this.convertImgToBase64('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0', (dataUrl) => {
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

  openDialog(docName: string, fileName: string) {
    this.socket.initSocket();
    this.docName = docName;
    this.fileName = fileName;
    this.dialogAction.openDialog();
  }

  dialogOk() {
    this.socket.closeConnect();
    this.documents.find(f => f.name === this.docName).files.find(f => f.name === this.fileName).statusUpload = true;
  }

  dialogClose() {
    this.socket.closeConnect();
  }
}
