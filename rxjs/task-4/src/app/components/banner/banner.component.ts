import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenInfoService} from "../../services/token-info.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

  public holders: number | undefined;

  constructor(private readonly cdr: ChangeDetectorRef,
              private readonly tokenInfoService: TokenInfoService) {
    this.tokenInfoService.tokenData.subscribe(data => {
      this.holders = data.holdersNumber
      console.log(this.holders);
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
  }

}
