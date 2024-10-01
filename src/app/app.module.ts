import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
    NewAppointmentComponent,
    DashboardComponent,
    AppointmentListComponent,
    HttpClientModule
  ],
  providers: [],
})
export class AppModule { }
