import { Component } from '@angular/core';
import { ChartsService } from './chart-list/chart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-charts';

  constructor() { }
}
