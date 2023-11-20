import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  newPlayer : {id:number, name:string, age:number, category:string, biddingPrice: number};
  
  private url= "string";
  constructor(private httpclient : HttpClient) { }
  getTeams():Observable<any[]>{
    return;
  }
  createTeam(newPlayer) : Observable<any[]>{
    return
  }
  getPlayers():Observable<any[]>{
    return
  }

}
