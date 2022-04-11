import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentI } from '../../../models/payment.interface';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {

  constructor(private firestore: AngularFirestore, private http: HttpClient) {
    
  }

  /*

  el usuario paga
  tomo los datos del pago y los busco en la api de mercado libre
  si el pagoId y referencia existen pregunto si ya existen en mi db
  si no existen lo cargo junto con los datos del usuario que estan en el formulario
  
  */
  private urlApi = 'https://api.mercadopago.com/v1/payments/';

  public get(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer TEST-5572828431042066-032716-2dbc921df239a60706df7dd03ba13795-335570711'
      })
    };
    return this.http.get(this.urlApi + id,httpOptions);
  }
  
  public createPayment(data: {paymentId: string, status: string, preference_id: string}) {
    
    return this.firestore.collection('payments').add(data);
  }

  public getPayment(documentId: string) {
    
    return this.firestore.collection('payments', ref => ref.where('paymentId', '==', documentId)).snapshotChanges()
  }
  public getPayments() {
    return this.firestore.collection('payments').snapshotChanges();
  }
  public updategetPayment(documentId: string, data: any) {
    return this.firestore.collection('payments').doc(documentId).set(data);
  }
}