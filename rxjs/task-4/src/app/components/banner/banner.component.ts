import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenInfoService} from "../../services/token-info.service";
import {Observable} from "rxjs";
import {TokenInfo} from "../../models/TokenInfo";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {

  public tokenData$: Observable<TokenInfo>;

  constructor(private readonly tokenInfoService: TokenInfoService) {
    this.tokenData$ = this.tokenInfoService.tokenData;
  }
}
