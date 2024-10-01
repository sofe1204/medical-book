import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../../service/master-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit{

  appList:any[]=[];
  constructor(private master:MasterServiceService){

  }
  ngOnInit(): void {
    this.getTodaysAppointemnts();
    this.getAllAppointments();
  }

  getTodaysAppointemnts(){
    this.master.getTodayAppointments().subscribe((res:any)=>{
        this.appList = res.data; 
    }, 
    error=>
    {
      alert("Failed to fetch todays appointments")
    }
  )
  }
  getAllAppointments(){
    this.master.getAllAppointments().subscribe((res:any)=>{
        this.appList = res.data; 
    }, 
    error=>
    {
      alert("Failed to fetch all appointments")
    }
  )
  }
  markDone(appointmentId:number){
    this.master.getAppointmentDone(appointmentId).subscribe((res:any)=>{
      this.getTodaysAppointemnts();
    }, 
    error=>
    {
      alert("Failed to fetch all appointments")
    }
  )
  }
}
