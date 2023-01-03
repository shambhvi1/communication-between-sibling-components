import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchInputService {
  dataEmitter = new EventEmitter<string>();

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.emit(data);
  }

  // public message = new Subject<string>();
  // setMessage(value: string) {
  //   console.log(value);
  //   this.message.next(value);
  // }


}
