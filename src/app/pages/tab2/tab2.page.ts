import { Component, ViewChild} from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  constructor( private noticiasService: NoticiasService ){

  }

  @ViewChild(IonSegment) segment: IonSegment;

  categorys =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  news : Article[] = [];

  ionViewDidEnter() {
    this.chargeNew(this.categorys[0]);
  }

  changeCategory( event){
    this.news = [];
    this.chargeNew(event.detail.value);
  }

  chargeNew( category: string){
    this.noticiasService.getTopHeadLinesCategorys(category).subscribe( resp => {
      this.news.push(...resp.articles);
    });
  }
}
