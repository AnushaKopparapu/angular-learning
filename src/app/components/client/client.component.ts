import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIModelResponse } from '../../model/interface/role';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../reusablecomponent/alert/alert.component';
import { MyButtonComponent } from '../../reusablecomponent/my-button/my-button.component';

@Component({
  selector: 'app-client',
  imports: [FormsModule,UpperCasePipe,DatePipe,AlertComponent,MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  currentDate = new Date();
  clientObj: Client = new Client();
  clientList: Client[] = [];
  firstname = signal('Angular');
  

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient();

  }
  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIModelResponse) => {
      this.clientList = res.data;
    })
  }
  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIModelResponse) => {
      if (res.result) {
        alert("Client Creation Successfull")
        this.loadClient();
        this.clientObj = new Client();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(data: Client){
    this.clientObj = data;

  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete");
    if (isDelete) {
      this.clientService.deleteClientbyId(id).subscribe((res: APIModelResponse) => {
        if (res.result) {
          alert("Client Deletion Successfull")
          this.loadClient();
        } else {
          alert(res.message)
        }
      })

    }


  }

}
