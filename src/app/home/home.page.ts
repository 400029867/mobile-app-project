import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  klassen: any = null;

  selected: any = {
    klas: null,
    group_size: 2,
  };

  public dataService: DataService;

  constructor(public data: DataService) {
    this.data.GetKlassen().subscribe((output) => {
      this.klassen = output.docs;
      if (this.klassen.length > 0) {
        this.selected.klas = this.klassen[0].data().naam;
      }
    });
  }

  MaakGroep() {
    this.data.GetStudentenInKlas(this.selected.klas, (studenten) => {
      const { docs } = studenten;
      docs.forEach((doc) => {
        console.log(doc);
      });
    });
  }
}
