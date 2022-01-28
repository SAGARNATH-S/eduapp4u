import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://bbd0-2409-4073-300-b3cc-656a-aad3-280e-e589.ngrok.io';

  constructor(private http: HttpClient) { }

  signup(form: NgForm): any {
    return this.http.post<any>(this.apiUrl + '/users/', form);
  }
  login(form: NgForm):any {
    return this.http.post<any>(this.apiUrl + '/users/login/', form);
}


}
