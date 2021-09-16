import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TokenInfoService} from "../../services/token-info.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {

  constructor(private readonly tokenInfoService: TokenInfoService) {
    this.tokenInfoService.getTokenData().subscribe(console.log)
  }

  ngOnInit(): void {
  }

}
