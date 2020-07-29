import { Component, OnInit, Input } from '@angular/core';
import { Article, Source } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Article;
  @Input() index:number;
  constructor() { }

  ngOnInit() {}

}