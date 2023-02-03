import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReelsCounterService {

  counter : number = 0;

  selectedReelsToConcatenate : string[] =[];

  constructor() { }

  incCounter(){
    this.counter++;
  }

  decCounter() {
    this.counter--;
  }
}
