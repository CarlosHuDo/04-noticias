import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http:HttpClient) { }

  private executeQuery<T>( query: string){
    query = apiUlr + query;
    return this.http.get<T>(query, {headers});
  }

  getTopHeadLines(){
    return this.executeQuery<RespuestaTopHeadLines>(`/top-headlines?country=mx`);
  }

  getTopHeadLinesCategorys(category : string){
    return this.executeQuery<RespuestaTopHeadLines>(`/top-headlines?country=mx&category=${category}`);
  }
}
