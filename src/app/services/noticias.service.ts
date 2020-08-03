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

  headLinesPage = 0;
  categoryCurrent = '';
  categoryPage = 0;

  constructor( private http:HttpClient) { }

  private executeQuery<T>( query: string){
    query = apiUlr + query;
    return this.http.get<T>(query, {headers});
  }

  getTopHeadLines(){
    this.headLinesPage++;
    return this.executeQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.headLinesPage}`);
  }

  getTopHeadLinesCategorys(category : string){

    if(this.categoryCurrent === category){
      this.categoryPage++;
    }else{
      this.categoryPage = 1;
      this.categoryCurrent = category;
    }
    return this.executeQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${category}&page=${this.categoryPage}`);
  }
}
