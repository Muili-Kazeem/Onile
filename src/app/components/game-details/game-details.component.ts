import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game-models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css', "./game-details2.component.css"]
})
export class GameDetailsComponent implements OnInit {

  gameRating!: number;
  gameId!: string;
  game!: Game;
  routeSub!: Subscription;
  gameSub!: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params["id"];
      this.getGameDetails(this.gameId);
    })
  }

  getGameDetails(id: string): void {
    this.gameSub = this._httpService.getGameDetails(id).subscribe((gamesResponse: Game) => {
      this.game = gamesResponse;
      // console.log(gamesResponse)
      // setTimeout(() => {
      //   this.gameRating = Number(this.game.metacritic);
      // })
    })
  }

  // getColor(value: number): string {
  //   return value > 75 ? "#5ee432" : value > 50 ? "#fffa50" : value > 30 ? "#f7aa38" : "#ef4655";
  // }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
  }

}
