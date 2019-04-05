import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  GetStudenten(callback?: (studenten: firestore.QuerySnapshot) => void) {
    this.firestore.collection('student').get().subscribe((studenten) => {
      if (callback) {
        callback(studenten);
      }
    });
  }

  GetKlassen(callback?: (klassen: firestore.QuerySnapshot) => void) {
    this.firestore.collection('klas').get().subscribe(klassen => {
      if (callback) {
        callback(klassen);
      }
    });
  }

}
