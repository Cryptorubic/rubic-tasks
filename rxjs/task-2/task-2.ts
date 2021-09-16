import {forkJoin, Observable, of, switchMap} from "rxjs";
import {getUserById, getTokenByAddress, getTokenImgBySymbol} from "./utils.js";

export interface Token { address: string, symbol: string }
export interface User { id: number, favoriteTokenAddress: string; name: string }
export interface Image { url: string, caption: string }

export type GetUserByIdFn = (userId: number) => Observable<User>;
export type GetTokenByAddressFn = (address: string) => Observable<Token>;
export type GetTokenImgBySymbolFn = (tokenSymbol: string) => Observable<Image>;


function getUserFavoriteTokenImage(userId): Observable<Image> {
   return getUserById(userId).pipe(
      switchMap(user => getTokenByAddress(user.favoriteTokenAddress)),
      switchMap(token => getTokenImgBySymbol(token.symbol))
   )
}

const testUserId = 1;
getUserFavoriteTokenImage(testUserId).subscribe(console.log);
