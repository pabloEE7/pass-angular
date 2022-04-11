import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "search.component.html"
})
export class SearchComponent implements OnInit {

  constructor() {
    this.status = false;
  }

  @Input()
  data: any;

  @Input()
  status: boolean;

  ngOnInit() {
  }

  
}
