import { Component, Input, OnInit } from "@angular/core";
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: "app-table",
  templateUrl: "table.component.html"
})
export class TablesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.view = false;
    this.new = false;
    this.edit = false;
    this.deleted = false;
    this.duplicate = false;
    this.search = true;
    this.data_search = "";
    this.export = true;
    this.path = this.document.location.href
  }

  

  @Input()
  data: any;

  @Input()
  column_thead: any;

  @Input()
  column_tbody: any;

  @Input()
  view: boolean;

  @Input()
  new: boolean;

  @Input()
  edit: boolean;

  @Input()
  deleted: boolean;

  @Input()
  duplicate: boolean;

  @Input()
  search: boolean;

  @Input()
  data_search: string;

  @Input()
  export: boolean;

  @Input()
  filters: any;


  ngOnInit() {
    

  }

  remover(indice: number): void {
    this.data.splice(indice, 1);
  }
  data_services: any;
  column_tbody_services: any;
  path: string;
  
}
