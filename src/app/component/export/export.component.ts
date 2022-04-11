import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-export",
  templateUrl: "export.component.html"
})
export class ExportComponent implements OnInit {

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
