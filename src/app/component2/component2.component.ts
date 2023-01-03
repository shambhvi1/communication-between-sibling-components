import { Component, OnInit } from '@angular/core';
import { SearchInputService } from '../search-input.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

 
  subscription: Subscription = new Subscription;
  inputText: string='';
  constructor(private searchInputService: SearchInputService){}

  ngOnInit() {
   
    this.searchInputService.dataEmitter.subscribe((val) =>{
    this.inputText= val;
  });
  // this.subscription = this.searchInputService.message.subscribe(
  //   (message) => {
  //     this.inputText = message;
  //   }
  // );



  }


}
