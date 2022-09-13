import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,

  ]
})
export class DefaultModule { }
