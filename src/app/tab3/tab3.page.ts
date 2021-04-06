import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  urlImageStorage: string[] = [];
  constructor(private avStorage: AngularFireStorage, public fotoService: FotoService, private route: Router) {}

  async ionViewDidEnter(){
    this.tampilkanData();
  }

  tampilkanData(){
    this.fotoService.urlImageStorage = [];
    var refImage = this.avStorage.storage.ref('imgStorage');
    refImage.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          this.fotoService.urlImageStorage.unshift(url);
        });
      });
    }).catch((error) => {
      console.log(error);
    })
    this.urlImageStorage = this.fotoService.urlImageStorage;
  }

  openTab(index){
    this.route.navigate(['/tab4/' + index]);
  }
}
