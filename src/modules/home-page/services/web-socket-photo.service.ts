import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WebSocketPhotoService {

  socetResponse$ = new Subject<string>();

  ws: WebSocket;

  constructor() {
    
  }

  closeConnect() {
    this.ws.close();
  }

  getDataSocket(): Subject<string> {
    return this.socetResponse$;
  }

  initSocket(): void {
    this.ws = new WebSocket('ws://localhost:4000');
    console.log('Socket init');
    this.ws.onopen = () => {
      this.ws.send("Socket init");
    };

    this.ws.onclose = () => {
      this.ws.send("diconnnnect");
      console.log('Отключение от сокета');
    }

    this.ws.onmessage = (event) => {
      this.socetResponse$.next(event.data);
    };
  }
}
