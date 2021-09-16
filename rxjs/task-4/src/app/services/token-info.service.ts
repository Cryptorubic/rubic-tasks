import { Injectable } from '@angular/core';
import getTokenInfo from "../utils/token-info-mock";
import {BehaviorSubject, interval, Observable, Subject, timer} from "rxjs";
import {TokenInfo} from "../models/TokenInfo";

@Injectable({
  providedIn: 'root'
})
export class TokenInfoService {

  private tokenData$ = new Subject<TokenInfo>();

  public get tokenData(): Observable<TokenInfo> {
    return this.tokenData$.asObservable();
  }


  constructor() {}

  private getTokenInfo(): Observable<TokenInfo> {
    return getTokenInfo().pipe();
  }
}
