import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIModelResponse, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusablecomponent/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe,AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {


  projectForm: FormGroup = new FormGroup({

    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(0)

  })
  clientSrv = inject(ClientService);
  employeeList: Employee[] = [];
  clientList:Client[] = [];
  projectList = signal<ClientProject[]>([]);

  ngOnInit(): void {
      this.getAllClients();
      this.getAllEmployee();
      this.getAllClientProjects();

  }

  getAllEmployee() {
    this.clientSrv.getAllEmployee().subscribe((res: APIModelResponse) => {
      this.employeeList = res.data;
    })
  }
  getAllClients() {
    this.clientSrv.getAllClients().subscribe((res: APIModelResponse) => {
      this.clientList = res.data;
    })
  }
  getAllClientProjects() {
    this.clientSrv.getAllClientProjects().subscribe((res: APIModelResponse) => {
      this.projectList.set(res.data);
    })
  }
 onSaveProject(){

  const formValue = this.projectForm.value;
  debugger;
  this.clientSrv.addClientProjectUpdate(formValue).subscribe((res: APIModelResponse) => {
    if(res.result){
      alert("Client-Project created successfully")
    } else {
      alert(res.message)
    }
  })
 }
}
