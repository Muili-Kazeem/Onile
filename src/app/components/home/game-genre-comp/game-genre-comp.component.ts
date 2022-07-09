import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-game-genre-comp',
  templateUrl: './game-genre-comp.component.html',
  styleUrls: ['./game-genre-comp.component.css']
})
export class GameGenreCompComponent implements OnInit {

  @Input() gameId!: any;
  gameGenreDetail: any;

  constructor(
    private _router: Router,
    private _httpService: HttpService
    ) { }

  ngOnInit(): void {
    this._httpService.getGameDetails(this.gameId).subscribe((detail: any) => {
      this.gameGenreDetail = detail;
    });
  }

  openGameDetail(id: number) {
    this._router.navigate(["details", id]);
  }

}
