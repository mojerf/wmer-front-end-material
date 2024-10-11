import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(true);
  darkMode$ = this.darkMode.asObservable();

  setTheme(darkMode: boolean) {
    this.darkMode.next(darkMode);
  }
}
