import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Dashboard {
  menuActivo: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}
  private dashboardObservablePrivete: BehaviorSubject<Dashboard> =
    new BehaviorSubject<Dashboard>({
      menuActivo: 'tablero-principal'
    });

  get dashboardObservable() {
    return this.dashboardObservablePrivete.asObservable();
  }

  set dashboardObservableData(data: Dashboard) {
    this.dashboardObservablePrivete.next(data);
  }
}
