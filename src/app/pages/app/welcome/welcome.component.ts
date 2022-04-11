import { Component, OnInit } from "@angular/core";
import { WelcomeService } from './welcome.service';
import { map } from 'rxjs/operators';

import { PaymentI } from '../../../models/payment.interface';

@Component({
  selector: "app-welcome",
  templateUrl: "welcome.component.html"
})

export class WelcomeComponent implements OnInit {
  
  mensaje = "Error getting documents ";
  constructor(private _WelcomeService: WelcomeService) {

  }

  ngOnInit() {
    
  }

  onSubmit() {
    
    // deberia buscar si existe el pago y cargar los datos en la interfaz luego hacer el try catch para asegurarme que me devuleva los datos que necesito y no un 404
    this._WelcomeService.get("1247475344").subscribe( response => {
      const g = [response];
      g.forEach((data: any) => {
        try{
          if(data.status = "approved"){

            const gg = this._WelcomeService.getPayment("1247475340").pipe(map(changes => {
              return changes.map(action => {
                
                if(action.payload.doc.exists){
                  return action.payload.doc.data() as PaymentI;
                }
                return null;
              });
            }));
            
            
            
            
          /*.catch((error) => {
              console.log("Error getting documents: ", error);
          });*/

            

            

            /*this._WelcomeService.createPayment({
              paymentId: "1247475344",
              status: "approved",
              preference_id: "335570711-09082e5f-1852-4d32-bade-399dd47ef04f"
            }).then(() => {

              

            }, (error) => {
              console.error(error);
            });*/

            

            

          }
        }
        catch(err){
          console.log(err)
        }
      })
    });
    
  }
}

