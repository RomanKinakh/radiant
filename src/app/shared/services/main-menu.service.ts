import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private showMemu = new Subject<boolean>();

  getShowMenuValue(): Observable<boolean> {
    return this.showMemu.asObservable();
  }

  setShowMenuValue(value: boolean) {
   this.showMemu.next(value);
  }

  constructor() { }
}
