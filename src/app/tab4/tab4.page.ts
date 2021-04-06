import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  paramIndex: number;
  path: String = ""
  constructor(public fotoService: FotoService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('index')) {
        document.getElementById('image').style.display = 'none';
      }
      else{
        this.paramIndex = Number(paramMap.get('index'));
        this.path = this.fotoService.urlImageStorage[this.paramIndex];
        document.getElementById('image').style.display = 'block';
      }
    });
  }

}
