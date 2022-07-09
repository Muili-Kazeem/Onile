import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models/game-models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-search-comp',
  templateUrl: './game-search-comp.component.html',
  styleUrls: ['./game-search-comp.component.css']
})
export class GameSearchCompComponent implements OnInit {
  allGames!: Game[]
  private _routeSub!: Subscription;
  private _gameSub!: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _httpservice: HttpService
  ) { }

  ngOnInit(): void {
    this._routeSub = this._activatedRoute.params.subscribe((params: Params) => {
      if(params["game-search"]) {
        this.searchGames("metacrit", params["game-search"]);
      } else {
        this.searchGames("metacrit");
      }
    });
  }

  searchGames(sort: string, search?: string): void {
    this._gameSub = this._httpservice.getGameList(sort, search).subscribe((gameList: APIResponse<Game>) => {
      this.allGames = this.shuffle(gameList.results);
    })
  }

  shuffle = (arr: Game[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }

  openGameDetail(id: number) {
    this._router.navigate(["details", id]);
  }

  ngOnDestroy(): void {
    if (this._routeSub) {
      this._routeSub.unsubscribe();
    }
    if (this._gameSub) {
      this._gameSub.unsubscribe();
    }
  }
}
