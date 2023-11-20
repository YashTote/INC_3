import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  newPlayer : {id:number, name:string, age:number, category:string, biddingPrice: number};
  
  private url= "https://8080-aebcdfaefacffacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin";
  constructor(private httpclient : HttpClient) { }
  getTeams():Observable<any[]>{
    return;
  }
  createTeam(newPlayer) : Observable<any[]>{
    return
  }
  getPlayers():Observable<any []>{
    return this.httpclient.get<any []>(this.url + '/ListPlayers');
  }

}
