import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sites-new",
  templateUrl: "new.component.html"
})
export class SitesNewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.productos = [
      {
        id: 1,
        nombre: "pepa",
        status: "contracargo",
        image: "imagen1.jpg"
      },
      {
        id: 1,
        nombre: "pepa",
        status: "reembolso",
        image: "imagen1.jpg"
      },
      {
        id: 1,
        nombre: "pepa",
        status: "pagado",
        image: "imagen1.jpg"
      }
    ];
  }

  productos: any;
}
