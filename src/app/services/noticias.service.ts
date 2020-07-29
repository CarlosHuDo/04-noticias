import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http:HttpClient) { }

  getTopHeadLines(){
    return this.http.get<RespuestaTopHeadLines>(`http://newsapi.org/v2/top-headlines?country=us&apiKey=99cb60e7c0774aeaad8e14945c29d45b`);
  }
}
