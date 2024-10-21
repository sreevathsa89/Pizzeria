import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiName, ServiceUrlService } from 'src/app/core/api/service-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private http: HttpClient,
    private url: ServiceUrlService,
  ) { }

  signIn(loginBody: any) {
    let url = this.url.fetchUrlEndPoint(ApiName.SignIn);
    return this.http.post(url, loginBody);
  }
}
