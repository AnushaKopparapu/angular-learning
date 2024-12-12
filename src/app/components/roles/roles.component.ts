import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIModelResponse, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

roleList: IRole[] = []; 
http = inject(HttpClient);



ngOnInit(): void { 
  this.getAllRoles()
  
}

getAllRoles(){

  this.http.get<APIModelResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: APIModelResponse) => {
 this.roleList = res.data;
  })

}


}