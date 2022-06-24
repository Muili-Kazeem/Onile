import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search: string = "";
  private _searchSub!: Subscription;

  constructor(
    private _router: Router,
    private _http: HttpService
    ) { }

  ngOnInit(): void {
    this._searchSub = this._http.searchWord$.subscribe(searchword => {
      this.search = searchword;
    });
  }

  onSubmitSearch(form: NgForm) {
    this._http.searchWordSubject.next(this.search);
    this._router.navigate(["search", form.value.search])
  }

  ngOnDestroy(): void {
    if (this._searchSub) {
      this._searchSub.unsubscribe();
    }
  }

}
