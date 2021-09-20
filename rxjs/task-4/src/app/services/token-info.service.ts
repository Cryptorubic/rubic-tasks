import { Injectable } from '@angular/core';
import getTokenInfo from "../utils/token-info-mock";
import {BehaviorSubject, interval, Observable, Subject, timer} from "rxjs";
import {TokenInfo} from "../models/TokenInfo";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TokenInfoService {

  private tokenData$: BehaviorSubject<TokenInfo>;

  /**
   * Get token data.
   * @return Observable token data.
   */
  public get tokenData(): Observable<TokenInfo> {
    return this.tokenData$.asObservable();
  }

  constructor() {
    this.tokenData$ = new BehaviorSubject<TokenInfo>(undefined);
    interval(3000).pipe(map(() => this.getTokenInfo()))
        .pipe(switchMap(data => data))
        .subscribe((data: TokenInfo) => this.tokenData$.next(data));
  }

  /**
   * Makes request for token info.
   * @return Observable token info.
   */
  private getTokenInfo(): Observable<TokenInfo> {
    return getTokenInfo();
  }
}
