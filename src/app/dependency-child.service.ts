import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyChildService {

  constructor() { }

  doSomething = () => 'Hello world';
}
