import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { preferenciaMeliI } from '../../../models/paymentMeli.interface';
import { DashboardService } from './dashboard.service';


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements OnInit {

  url = "";
  /*registerForm;
  public submitted = false;
  public requiredText = 'Este campo es requerido';*/

  constructor(private _formBuilder: FormBuilder, private _DashboardService: DashboardService, private router: Router) {

    /*this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNum: ['', [Validators.required]]
    });*/

  }

  /*get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else{
      this._WelcomeService.post_Init_point().subscribe( response => {
        try{
          window.location.href = response.init_point;

        }
        catch(err){
          console.log(err)
        }
        
      });
      
    }
  }*/

  
  ngOnInit() {
    this._DashboardService.post_Init_point().subscribe( response => {
      try{
        this.url = response.init_point;
      }
      catch(err){
        console.log(err)
      }
      
    });
  }
}

