import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  // players : {id:number, name:string, age:number, category:string, biddingPrice: number};
  players : [{id:number, name:string, age:number, category:string, biddingPrice: number}];
  newPlayer : {id:number, name:string, age:number, category:string, biddingPrice: number};
  // newPlayer :  ;
  constructor(private adminService : AdminService) {
    this.players.
  }

  ngOnInit(): void {
  }

}
