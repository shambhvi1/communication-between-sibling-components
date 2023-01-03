import { Component, EventEmitter, Output } from '@angular/core';
import { SearchInputService } from '../search-input.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  enteredSearchValue: string = '';
  enteredText="";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private searchInputService: SearchInputService) { }
  ngOnInit(): void {
  }

  onSearchTextChanged(){
    
    this.searchInputService.raiseDataEmitterEvent(this.enteredText);
    
  }

  onClick(){
    this.searchInputService.raiseDataEmitterEvent(this.enteredText);
  }

  // setMessage(event: { value: string; }) {
  //   console.log(event.value);
  //   this.searchInputService.setMessage(event.value);
  // }


}
