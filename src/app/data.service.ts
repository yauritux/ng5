import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  goals = new BehaviorSubject<any>([
    'Make Aikido as my daily routine exercise', 
    'Find a good WingChun master', 
    'Buy a good wooden dummy to practice my WingChun techniques'
  ]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
