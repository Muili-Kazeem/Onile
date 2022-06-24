import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
      console.log(this.gameGenres);
    })
  }

  ngOnDestroy(): void {
    if (this._gameGenresSub) {
      this._gameGenresSub.unsubscribe();
    }
  }

}
