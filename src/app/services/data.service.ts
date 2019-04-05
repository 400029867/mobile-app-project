import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private db: AngularFirestore
  ) { }

  GetStudenten(cb?: (studenten: firestore.QuerySnapshot) => void) {
    this.db.collection('student').get().subscribe((output) => {
      if (cb) {
        cb(output);
      }
    });
  }

  GetKlassen(cb?: (klassen: firestore.QuerySnapshot) => void) {
    this.db.collection('klas').get().subscribe(output => {
      if (cb) {
        cb(output);
      }
    });
  }

}
