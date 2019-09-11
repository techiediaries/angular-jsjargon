import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private JSON_ENDPOINT = "https://www.techiediaries.com/api/data.json";

  constructor(private httpClient: HttpClient) { }

  public fetch(){
    return this.httpClient.get(this.JSON_ENDPOINT);
  }
}
