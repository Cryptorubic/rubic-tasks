import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenInfoService} from "../../services/token-info.service";
import {Observable} from "rxjs";
import {TokenInfo} from "../../models/TokenInfo";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {

  public tokenData$: Observable<TokenInfo>;

  constructor(private readonly cdr: ChangeDetectorRef,
              private readonly tokenInfoService: TokenInfoService) {

    this.tokenData$ = this.tokenInfoService.tokenData;
  }

  ngOnInit(): void {
  }

}
