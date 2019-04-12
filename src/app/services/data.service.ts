import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore as Firestore, firestore } from 'firebase';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: AngularFirestore) {}

  GetStudenten(callback?: (studenten: Firestore.QuerySnapshot) => void) {
    this.firestore
      .collection('student')
      .get()
      .subscribe((studenten) => {
        if (callback) {
          callback(studenten);
        }
      });
  }

  GetKlassen() {
    return this.firestore.collection('klas').get();
  }

  GetStudentenInKlas(
    id: string,
    callback?: (studenten: firestore.QuerySnapshot) => void,
  ) {
    this.firestore
      .collection('student')
      .get()
      .subscribe((output) => {
        output.query
          .where('klas', '==', id)
          .get()
          .then((studenten) => {
            console.log(studenten);
            if (callback) {
              callback(studenten);
            }
          });
      });
  }
}
