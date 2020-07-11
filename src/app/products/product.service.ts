import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { IProduct } from './product';
import { from } from 'rxjs';
import { $ } from 'protractor';


@Injectable({providedIn:'root'})
        
export class ProductService {

  private productUrl  = 'api/products/products.json';
  constructor(private http: HttpClient) {}

getProducts() : Observable<IProduct[]> {     //to get the product data
return this.http.get<IProduct[]>(this.productUrl).pipe(
  tap(data=> console.log('All: '+JSON.stringify(data))),
  catchError(this.handleError)
);
}

private handleError(err: HttpErrorResponse) {

  let errorMesage = '';
  if (err.error instanceof ErrorEvent) {
    errorMesage = 'An error occured:  ${err.errorMessage}';
    } 
    else {
      errorMesage = 'Server Returned code: : ${err.status}, error message is: ${err.message}'; 
    }
    console.error(errorMesage);
    return throwError(errorMesage);
  
}

}
