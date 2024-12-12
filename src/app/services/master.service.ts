import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIModelResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations():Observable<APIModelResponse>{
    return this.http.get<APIModelResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
