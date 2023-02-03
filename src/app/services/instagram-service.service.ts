import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstagramServiceService {

  private baseUrl = 'http://localhost:8080/instagram';


  constructor(private http : HttpClient) { }

  getAllInstagramReels(link : any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`+`/getAllInstagramReels`,link,{
      reportProgress : true,
      responseType : 'json'
    });
  }

}
