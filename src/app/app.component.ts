import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'proyect01';

  ngOnInit() {
    this.user_services = [
      {
        id: 1,
        nombre: "pablo",
        apellido: "",
        status: "activo",
        empresa: "",
        telefono: "",
        email: "",
        password: "",
        image: "fores.jpg"
      }
    ];
  }

  user_services: any;
}
