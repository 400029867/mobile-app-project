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

  groups: firebase.firestore.QueryDocumentSnapshot[] = [];

  public dataService: DataService;

  constructor(public data: DataService) {
    this.data.GetKlassen().subscribe((output) => {
      this.klassen = output.docs;
      if (this.klassen.length > 0) {
        this.selected.klas = this.klassen[0].data().naam;
      }
    });

    this.data.GetShake().subscribe(() => {
      this.groups = [];
    });
  }

  MaakGroep() {
    this.data.GetStudentenInKlas(this.selected.klas, (studenten) => {
      this.GenerateGroups(this.selected.group_size, studenten, (groups) => {
        console.log(groups);
        this.groups = groups;
      });
    });
  }

  GenerateGroups(
    groupSize: number,
    studenten: firebase.firestore.QueryDocumentSnapshot[],
    callback?: (group: any) => void,
  ) {
    let remainder = studenten.length % groupSize;
    let groups = [];
    studenten = this.shuffle(studenten);

    if (remainder == 0) {
      for (var i = 0; i < studenten.length / groupSize; i++) {
        groups.push(studenten.slice(i * groupSize, i * groupSize + groupSize));
      }
    } else if (remainder == groupSize - 1) {
      for (var i = 0; i < (studenten.length + 1) / groupSize; i++) {
        if (i == (studenten.length + 1) / groupSize - 1) {
          groups.push(
            studenten.slice(i * groupSize, i * groupSize + groupSize - 1),
          );
        } else {
          groups.push(
            studenten.slice(i * groupSize, i * groupSize + groupSize),
          );
        }
      }
    } else {
      let group_count = (studenten.length - remainder) / groupSize;
      for (var i = 0; i < group_count; i++) {
        groups.push(studenten.slice(i * groupSize, i * groupSize + groupSize));
      }
      var remaining_students_index = group_count * groupSize;
      var index = 0;
      for (
        var i = remaining_students_index;
        i < remaining_students_index + remainder;
        i++
      ) {
        groups[index].push(studenten[i]);
        index++;
        if (index == group_count) {
          index = 0;
        }
      }
    }

    if (callback) {
      callback(groups);
    }
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
}
