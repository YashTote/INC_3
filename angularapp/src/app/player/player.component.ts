import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  players : {id:number, name:string, age:number, category:string, biddingPrice: number};
  constructor() { }

  ngOnInit(): void {
  }

}
