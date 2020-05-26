import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class WebSocketPhotoService {
 
  socetResponse$ = new Subject<string>();
  
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
      this.socetResponse$.next(event.data);
    };
  }

  closeConnect() {
    this.ws.close();
  }

  getDataSocket(): Subject<string> {
    return this.socetResponse$;
  }
}
