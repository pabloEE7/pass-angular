import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { preferenciaMeliI } from '../../../models/paymentMeli.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  dataService = {
    "payer_email":"pablo010villegas@gmail.com",
    "title": "titulo 1", 
    "description": "prueba de items", 
    "picture_url": "http://www.myapp.com/myimage.jpg", 
    "category_id": "categorya123", 
    "quantity": 1, 
    "unit_price": 21
  }

  constructor(private http: HttpClient) {
    
  }

  post_Init_point(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<any>(environment.apibackEnd + 'pagos/payment', this.dataService ,httpOptions);
  } 
}