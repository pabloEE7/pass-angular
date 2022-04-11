import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { PaymentI } from '../../../models/payment.interface';
import { DataService } from './data.service';


@Component({
  selector: "app-home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {

  payment_id;
  status;
  preference_id;
  registerForm;
  dataForm: any;
  urlParam;
  mensaje = "Error getting documents ";
  staus = false;
  public submitted = false;
  public requiredText = 'Este campo es requerido';

  constructor(private _formBuilder: FormBuilder, private _DataService: DataService, private router: Router) {

    this.registerForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contactNum: ['', [Validators.required]]
    });

    this.urlParam = this.router.parseUrl(this.router.url);
    
    this.payment_id = this.urlParam.queryParams['payment_id']
    this.status = this.urlParam.queryParams['status']
    this.preference_id = this.urlParam.queryParams['preference_id']

    

  }
  
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    else{
      
      this.saveNewDataFirebase(); //se inicia el proceso de guardado de datos en firebase y el correspondiente qr
      
    }
  }

  saveNewQr(){
    const g = this.registerForm.value;
    this.dataForm = JSON.stringify(Object.assign(this.registerForm.value,{bday: "04-08-2022", createdBy: "4"}));
    this._DataService.addQr(this.dataForm).subscribe( response => {
      try{
        this.router.navigate(['welcome']);
      }
      catch(err){
        console.log(err)
      }
      
    }); //se genera el qr
  }

  saveNewDataFirebase():void {
    
    this._DataService.get(this.payment_id).subscribe( response => { // validamos si existe el pago en meli
      const g = [response];
      g.forEach((data: any) => {
        try{
          
          if(data.status = "approved"){

            this._DataService.getPayment(this.payment_id).subscribe((querySnapshot:any) => {
              querySnapshot.forEach((action:any) => {
                
                  if(!action.payload.doc.exists){
        
                    const a = action.payload.doc.data() as PaymentI;
                    console.log(a.paymentId)

                    this._DataService.createPayment({
                      paymentId: this.payment_id,
                      status: this.status,
                      preference_id: this.preference_id
                    });
                    this.saveNewQr();
                     
                  }
                  else{
                    console.log("ya existe")
                  }
              });
            })
            /*.subscribe( dataFire => {

              if(dataFirebase){ // si no existe lo agregamos
                dataFire.forEach( x => {
                  this._DataService.createPayment({
                    paymentId: this.payment_id,
                    status: this.status,
                    preference_id: this.preference_id
                  })
                });
                this.saveNewQr();
              }
            }) */
          }
        }
        catch(err){
          console.log(err)
        }
      })
    });
  }
  
  ngOnInit(): void {

    

    /*const gg = this._DataService.getPayment(this.payment_id).pipe(map(changes => { // validamos si ya existe en la db
      
       changes.map(action => {
       if(action.payload.doc.exists){

        const a = action.payload.doc.data() as PaymentI;
        console.log(a.paymentId)
         
       }
     });
   }))*/

    
  }
}
