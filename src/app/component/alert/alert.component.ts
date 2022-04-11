import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "alert.component.html"
})
export class AlertComponent implements OnInit {

  constructor() {
    this.status = 0;
    this.title = "";
  }

  @Input()
  status: number;

  @Input()
  title: string;

  ngOnInit() {

    switch (this.status) {
      case 1 :
        if (this.title == "")
          this.title = "El registro fue registrado con exito";
        break;
      case 2:
        if (this.title == "")
          this.title = "El registro fue editado con exito";
        break;
      case 3:
        if (this.title == "")
          this.title = "Ocurrio un Error";
        break;
    }
  }

  
}
