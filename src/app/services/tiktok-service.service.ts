import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TiktokServiceService {

  private baseUrl = 'http://localhost:8080/instagram';


  constructor(private http : HttpClient) { }

  getAllTiktokReels(link : string): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`+`/getAllTiktokReels`,link,{
      reportProgress : true,
      responseType : 'json'
    });
  }
}
