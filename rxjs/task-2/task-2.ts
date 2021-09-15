import {Observable} from "rxjs";
import {getUserById} from "./utils";

export interface Token { address: string, symbol: string }
export interface User { id: number, favoriteTokenAddress: string; name: string }
export interface Image { url: string, caption: string }

export type GetUserByIdFn = (userId: number) => Observable<User>;
export type GetTokenByAddressFn = (address: string) => Observable<Token>;
export type GetTokenImgBySymbolFn = (tokenSymbol: string) => Observable<Image>;

const userId = 1;


getUserById(userId)
   .pipe(
       // TODO
   )
    // @ts-ignore
   .subscribe((image: Image) => console.log(image.url));
