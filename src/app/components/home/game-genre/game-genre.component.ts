import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game-models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-genre',
  templateUrl: './game-genre.component.html',
  styleUrls: ['./game-genre.component.css']
})
export class GameGenreComponent implements OnInit {

  gameGenres!: any;
  private _gameGenresSub!: Subscription;

  constructor(
    private _httpservice: HttpService,
  ) { }

  ngOnInit(): void {
    this.getGameGenres();
  }

  getGameGenres(): void {
    this._gameGenresSub = this._httpservice.getGameGenres().subscribe((gameGenres: any) => {
      this.gameGenres = gameGenres.results.splice(0, 8)
      this.gameGenres = this.shuffle(this.gameGenres)
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

  ngOnDestroy(): void {
    if (this._gameGenresSub) {
      this._gameGenresSub.unsubscribe();
    }
  }

}
