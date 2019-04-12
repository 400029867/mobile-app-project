import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { firestore as Firestore, firestore } from 'firebase';
import { Shake } from '@ionic-native/shake/ngx';
import { calcBindingFlags } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: AngularFirestore, private shake: Shake) {}

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
    callback?: (studenten: Firestore.QueryDocumentSnapshot[]) => void,
  ) {
    this.firestore
      .collection('student')
      .get()
      .subscribe((output) => {
        output.query
          .where('klas', '==', id)
          .get()
          .then((studenten) => {
            if (callback) {
              callback(studenten.docs);
            }
          });
      });
  }

  GetShake() {
    return this.shake.startWatch();
  }
}
