import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIModelResponse, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList: IDesignation[] = [];
  isLoader:boolean = true;
  masterService = inject(MasterService)

  ngOnInit(): void {

 this.masterService.getDesignations().subscribe((result: APIModelResponse)=>{
this.designationList = result.data;
this.isLoader = false;
 },error=>{
  alert("API error/ Network Down");
  this.isLoader = false;
 })
  }

}
