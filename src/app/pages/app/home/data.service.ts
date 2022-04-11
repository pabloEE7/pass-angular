import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

import { QrI } from '../../../models/qr.interface';
import { PaymentI } from '../../../models/payment.interface';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  private urlApi = 'http://apipass.mooo.com:11500/api/nuevoQR';
  private urlApipayments = 'https://api.mercadopago.com/v1/payments/';

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  addQr(qr: QrI): Observable<QrI> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<QrI>(this.urlApi, qr,httpOptions);
  }

  public get(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization':  'Bearer TEST-5572828431042066-032716-2dbc921df239a60706df7dd03ba13795-335570711'
      })
    };
    return this.http.get(this.urlApipayments + id,httpOptions);
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