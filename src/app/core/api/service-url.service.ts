import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export enum ApiName {
  SignIn
}
@Injectable({
  providedIn: 'root'
})
export class ServiceUrlService {

  constructor() { }

  fetchUrlEndPoint(apiName: ApiName, params?: any) {
    let url = environment.apiUrl;
    switch(apiName){
      case ApiName.SignIn:
        url = url.concat('api/Login/Signin');
        break;
      default:
        break;
    }
    if(params) {
      for(const prop of Object.getOwnPropertyNames(params)){
        url = url.replace(`{${prop}}`, params[prop])
      }
    }
    return url;
  }
}
