import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  GetWelcomeMessage() {
    return 'Welcom to our amazing app';
  }
}
