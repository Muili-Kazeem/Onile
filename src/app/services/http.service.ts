import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, map, Observable, shareReplay } from 'rxjs';
import { environment as env } from '../../environments/environment';
import { APIResponse, Game } from '../models/game-models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // Use subject to make this variable a multicast
  searchWordSubject = new BehaviorSubject<string>("");
  searchWord$ = this.searchWordSubject.asObservable();


  constructor(
    private _http: HttpClient,
  ) { }

  getGameList(ordering: string, search?: string): Observable<APIResponse<Game>> {
    let params = new HttpParams().set("ordering", ordering);
    if (search) {
      params = new HttpParams().set("ordering", ordering).set("search", search);
    }
    return this._http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params: params})
      .pipe(shareReplay(1));
  }

  getGameGenres(): Observable<Object> {
    let params = new HttpParams().set("ordering", "-released");
    return this._http.get<Observable<Object>>(`${env.BASE_URL}/genres`, {params: params})
      .pipe(shareReplay(1));
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this._http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this._http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this._http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest, gameScreenshotsRequest, gameTrailersRequest
    }).pipe(map((wholeResponse: any) => {
      return {
        ...wholeResponse["gameInfoRequest"],
        screenshots: wholeResponse["gameScreenshotsRequest"]?.results,
        trailers: wholeResponse["gameTrailersRequest"]?.results
      };
    }),
    shareReplay(1)
    );
  }
}
