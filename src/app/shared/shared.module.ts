import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableComponent } from './components/table/table.component';
import { CreateChartModalComponent } from './components/create-chart-modal/create-chart-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { EditChartComponent } from './components/edit-chart/edit-chart.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [HeaderComponent, GraphComponent, TableComponent, CreateChartModalComponent, DateRangeComponent, TableComponent, EditChartComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    HighchartsChartModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [HeaderComponent, GraphComponent, TableComponent, CreateChartModalComponent, DateRangeComponent, TableComponent, EditChartComponent]
})
export class SharedModule { }
