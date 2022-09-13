import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateChartModalComponent } from 'src/app/shared/components/create-chart-modal/create-chart-modal.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CreateChartModalComponent);
  }

}
