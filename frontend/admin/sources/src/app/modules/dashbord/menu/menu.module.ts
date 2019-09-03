import { FilterPanelComponent } from './../../../components/journal/filter-panel/filter-panel.component';
import { MatPaginatorModule, MatProgressSpinner, MatProgressSpinnerModule, MatMenuModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatButton, MatButtonModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { JournalComponent } from './../../../components/journal/journal.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { DashbordComponent } from '../dashbord.component';
import { PersonalComponent } from './personal/personal.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { OrdersComponent } from './orders/orders.component';
import { SuggestNewsComponent } from './suggest-news/suggest-news.component';
import { StopSheetComponent } from './stop-sheet/stop-sheet.component';
import { MenuComponent } from './menu/menu.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { MasterClassesComponent } from './master-classes/master-classes.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { VacationScheduleComponent } from './vacation-schedule/vacation-schedule.component';
import { ProfessionalStaffTrainingComponent } from './professional-staff-training/professional-staff-training.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    // common components
    JournalComponent,
    FilterPanelComponent,
    // menu (menu pages) component
    DashbordComponent,
    PersonalComponent,
    ReservationsComponent,
    WorkScheduleComponent,
    OrdersComponent,
    SuggestNewsComponent,
    StopSheetComponent,
    MenuComponent,
    DeliveryComponent,
    MasterClassesComponent,
    FestivalsComponent,
    PurchasesComponent,
    VacationScheduleComponent,
    ProfessionalStaffTrainingComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    // Material
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    // Angular Ag-grid
    AgGridModule.withComponents([])
  ]
})
export class MenuModule { }