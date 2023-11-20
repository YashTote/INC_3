import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url  = 'https://8080-aebcdfaefacffabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/Movie';

  constructor(private httpclient : HttpClient) { }  
  login() : Observable<{role : string}>{
    return  ({role : 'ADMIN'});
  }

}
