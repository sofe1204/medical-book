import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "https://freeapi.miniprojectideas.com/api/HospitalAppointment/";
  }

  // Create a new appointment
  createNew(obj: any): Observable<any> {
    return this.http.post<any>(this.serviceURL + "AddNewAppointment", obj);
  }

  // Get all appointments
  getAllAppointments(): Observable<any> {
    return this.http.get<any>(this.serviceURL + "GetAllAppointments");
  }

  // Get today's appointments
  getTodayAppointments(): Observable<any> {
    return this.http.get<any>(this.serviceURL + "GetTodaysAppointments");
  }

  // Mark an appointment as done
  getAppointmentDone(appointmentId: number): Observable<any> {
    return this.http.get<any>(this.serviceURL + "MarkAppointmentDone?appointmentId=" + appointmentId);
  }
}
