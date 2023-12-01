import {Component} from '@angular/core';
import {viewModes} from '../../../models/toolbar-models';
import {NgxGanttToolbarOptionSyncService} from '../../../services/ngx-gantt-toolbar-option-sync.service';

@Component({
  selector: 'app-ngx-gantt-view-mode-selector',
  templateUrl: './ngx-gantt-view-mode-selector.component.html',
  styleUrls: ['./ngx-gantt-view-mode-selector.component.scss']
})
export class NgxGanttViewModeSelectorComponent {
  options: string[] = viewModes.map(vm => vm.name);
  selectedIndex = 2;
  constructor(private toolBarOptionService: NgxGanttToolbarOptionSyncService) {}
  handleIndexChange(viewModeIndex: number): void {
    this.toolBarOptionService.setViewMode(viewModes[viewModeIndex]);
  }
}
