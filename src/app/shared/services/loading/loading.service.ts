import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(true);
  loading$ = this.loading.asObservable();

  setLoading(state: boolean) {
    this.loading.next(state);
  }
}
