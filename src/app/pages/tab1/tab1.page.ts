import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  news: Article [] = [];
  constructor( private noticiasService:NoticiasService) {

  }

  ngOnInit(){
    this.noticiasService.getTopHeadLines()
    .subscribe( resp =>{
      // console.log('news',resp);
      this.news.push(...resp.articles);
    });
  }
}
