import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models/game-models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchWord!: string;
  sort!: string;
  games!: Array<Game>;
  private _searchWordSub!: Subscription;

  constructor(
    private _httpservice: HttpService,
  ) { }

  ngOnInit(): void {
    this._searchWordSub = this._httpservice.searchWord$.subscribe(searchword => {
      this.searchWord = searchword
    });
  }

  ngOnDestroy(): void {

    if (this._searchWordSub) {
      this._searchWordSub.unsubscribe();
    }
  }

}
