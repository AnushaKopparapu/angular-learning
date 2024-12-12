import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { APIModelResponse } from '../model/interface/role';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  getAllClients(): Observable<APIModelResponse> {
    return this.http.get<APIModelResponse>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENTS)
  }
  getAllEmployee(): Observable<APIModelResponse> {
    return this.http.get<APIModelResponse>(environment.API_URL + constant.API_METHOD.GET_ALL_EMPLOYEE)
  }
  getAllClientProjects(): Observable<APIModelResponse> {
    return this.http.get<APIModelResponse>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENT_PROJECT)
  }
  addUpdate(obj: Client): Observable<APIModelResponse> {
    return this.http.post<APIModelResponse>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENT, obj)
  }
  deleteClientbyId(id: number): Observable<APIModelResponse> {
    return this.http.delete<APIModelResponse>(environment.API_URL + constant.API_METHOD.DELETE_CLIENT + id)
  }
  addClientProjectUpdate(obj: Client): Observable<APIModelResponse> {
    return this.http.post<APIModelResponse>(environment.API_URL + constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, obj)
  }
  
}
