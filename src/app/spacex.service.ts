import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  baseUrl : string = "https://api.spaceXdata.com/v3/launches?limit=100";

  constructor(private http:HttpClient) { }

  getData(query?:string){
    let url = query?this.baseUrl+query:this.baseUrl;
    console.log(url);
    return this.http.get(url);
  }
}
