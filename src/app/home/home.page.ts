import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  klassen: any = null;

  public dataService: DataService;

  constructor(public data: DataService) {
    this.data.GetKlassen().subscribe((output) => {
      this.klassen = output;
      console.log(output);
    });
  }
}
