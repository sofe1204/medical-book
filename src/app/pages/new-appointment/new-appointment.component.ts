import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterServiceService } from '../../service/master-service.service';

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css'
})
export class NewAppointmentComponent {

  appointmentObj : any ={
      "name": "",
      "mobileNo": "",
      "city": "",
      "age": 0,
      "gender": "",
      "appointmentDate": "2024-10-01T06:48:57.628Z",
      "appointmentTime": "",
      "isFirstVisit": true,
      "naration": ""
  };

  constructor(private master: MasterServiceService){}

  onSaveAppointment() {
    console.log("Saving appointment...", this.appointmentObj);  // Add logging

    this.master.createNew(this.appointmentObj).subscribe((res: any) => {
      console.log("API response: ", res);  // Log the API response
      if(res.result){
        alert("Appointment Done");
      }
    }, (error) => {
      console.error("Error creating appointment: ", error);  // Log error
      alert("Appointment Failed, Check Form");
    });
  }
}
