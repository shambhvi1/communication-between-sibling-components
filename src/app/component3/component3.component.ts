import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchInputService } from '../search-input.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  subscription: Subscription = new Subscription;
  inputText: string='';
  constructor(private searchInputService: SearchInputService){}
  ngOnInit() {
   
      this.searchInputService.dataEmitter.subscribe((val) =>{
      this.inputText= val;
    });
  //   this.subscription = this.searchInputService.message.subscribe(
  //     (message) => {
  //       this.inputText = message;
  //     }
  //   );
  }

}
