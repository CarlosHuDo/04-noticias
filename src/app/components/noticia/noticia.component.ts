import { Component, OnInit, Input } from '@angular/core';
import { Article, Source } from 'src/app/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Article;
  @Input() index:number;

  constructor( private iab: InAppBrowser, private actionSheetCtrl: ActionSheetController,
              private socialSharingCtrl: SocialSharing) { }

  ngOnInit() {}

  openNew(){
    // console.log('Noticia', this.noticia.url);
    const browser = this.iab.create(this.noticia.url,'_system');
  }

   async launchMenu(){
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'action-dark',
      buttons: [{
        text: 'Compartir',
        icon: 'share-social-outline',
        handler: () => {
          console.log('Share clicked');
          this.socialSharingCtrl.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      },{
        text: 'Añadir a favorito',
        icon: 'star-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
