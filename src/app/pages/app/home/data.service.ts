import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { QrI } from '../../../models/qr.interface';
import { PaymentI } from '../../../models/payment.interface';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  publicToken = 'APP_USR-1fd52210-c58b-4843-b8af-ca4e0e429e7d';

  listPayment: PaymentI[] = [];

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  addQr(qr: QrI): Observable<QrI> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<QrI>(environment.apibackEnd + 'nuevoQR', qr,httpOptions);
  }

  public get(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${environment.meli.publicToken}`
      })
    };
    return this.http.get(environment.meli.api + 'payments/' + id,httpOptions);
  }

  public getPayment(documentId: string) {
    
    return this.firestore.collection('payments', ref => ref.where('paymentId', '==', documentId)).snapshotChanges() 
  }
  
  public createPayment(data: {paymentId: string, status: string, preference_id: string}) {
    
    return this.firestore.collection('payments').add(data);
  }

  
  /*
  public getPayments() {
    return this.firestore.collection('payments').snapshotChanges();
  }
  public updategetPayment(documentId: string, data: any) {
    return this.firestore.collection('payments').doc(documentId).set(data);
  }*/
}