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
      .subscribe(studenten => {
        if (callback) {
          callback(studenten);
        }
      });
  }

  GetKlassen(callback?: (klassen: Firestore.QuerySnapshot) => void) {
    this.firestore
      .collection('klas')
      .get()
      .subscribe(klassen => {
        if (callback) {
          callback(klassen);
        }
      });
  }

  GetStudentenInKlas(
    id: string,
    callback?: (studenten: firestore.QuerySnapshot[]) => void,
  ) {
    this.GetStudenten(_studenten => {
      var studenten = [];
      _studenten.docs.forEach(student => {
        if (student.data().klas === id) {
          studenten.push(student);
        }
      });
      if (callback) {
        callback(studenten);
      }
    });
  }
}
