import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WebSocketPhotoService {

  ws = new WebSocket('ws://localhost:4000');

  constructor() {
    console.log('Socket init'); 
    this.ws.onopen = () => {
      this.ws.send("Here's some text 2222222222 server is urgently awaiting!");
    };

    this.ws.onclose = () => {
      this.ws.send("diconnnnect");
      console.log('Отключение от сокета');
    }

    this.ws.onmessage = (event) => {
      console.log('Сообщение от серва: ', event);
    };
  }

  closeConnect() {
    this.ws.close();
  }
}
