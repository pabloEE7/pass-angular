import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sites",
  templateUrl: "sites.component.html"
})
export class SitesComponent implements OnInit {

  constructor() { }

  title = 'site';

  ngOnInit() {

    this.data_services = [];

    this.data_services.push(
      [1, "pepa", "proyect01.com.ar", "contracargo", "AD321", 1],
      [2, "pepa", "proyect01.com.ar", "contracargo", "AD321", 1],
      [3, "pepa", "proyect01.com.ar", "contracargo", "AD321", 1],
      [4, "pepa", "proyect01.com.ar", "contracargo", "AD321", 1]
    );

    console.log(this.data_services);

    this.column_thead_services = [
      "#",
      "Site Name",
      "Url",
      "Analytics View ID",
      "Analytics Code",
      "Active"
    ];

    this.column_tbody_services = [
      "id",
      "name",
      "url",
      "analyticsID",
      "analyticsCode",
      "active"
    ];
  }

  data_services: any;
  column_thead_services: any;
  column_tbody_services: any;
}
