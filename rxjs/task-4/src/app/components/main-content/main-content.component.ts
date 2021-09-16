import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {TokenInfoService} from "../../services/token-info.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {

  public price: number | undefined;

  constructor(private readonly cdr: ChangeDetectorRef,
              private readonly tokenInfoService: TokenInfoService) {
    this.tokenInfoService.tokenData.subscribe(data => {
      this.price = data.price;
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
  }

}
