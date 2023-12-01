import {GanttViewType} from '@worktile/gantt';

export interface NameValuePair {
  name: string;
  value: string;
}

export type ViewMode = NameValuePair;

export const viewModes: ViewMode[]  = [
  {
    name: 'Daily',
    value: GanttViewType.day
  },
  {
    name: 'Weekly',
    value: GanttViewType.week
  },
  {
    name: 'Monthly',
    value: GanttViewType.month
  },
  {
    name: 'Quarterly',
    value: GanttViewType.quarter
  },
  {
    name: 'Yearly',
    value: GanttViewType.year
  }
];
