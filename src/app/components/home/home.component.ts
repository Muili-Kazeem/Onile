import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchWord!: string;
  private _searchWordSub!: Subscription;
  heroCount!: number;
  private _heroCountSub!: Subscription;

  constructor(
    private _httpservice: HttpService,
  ) { }

  ngOnInit(): void {
    this._searchWordSub = this._httpservice.searchWord$.subscribe(searchword => {
      this.searchWord = searchword
    });

    this._heroCountSub = this._httpservice.heroCount$.subscribe(count => this.heroCount = count)
    console.log(this.heroCount);
  }

  ngOnDestroy(): void {
    this._httpservice.heroCountSubject.next(this.heroCount + 1)

    if (this._heroCountSub) {
      this._heroCountSub.unsubscribe();
    }

    if (this._searchWordSub) {
      this._searchWordSub.unsubscribe();
    }
  }

}
