import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ViewMode, viewModes} from '../models/toolbar-models';

@Injectable({
  providedIn: 'root'
})

export class NgxGanttToolbarOptionSyncService {
  private viewModeSubject = new BehaviorSubject<ViewMode>(viewModes[2]);

  getViewModeSubject(): BehaviorSubject<ViewMode> {
    return this.viewModeSubject;
  }

  setViewMode(vm : ViewMode): void {
    this.viewModeSubject.next(vm);
  }
}
