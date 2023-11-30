import {FormGroup} from '@angular/forms';

export interface Task {
  id: string;
  title: string;
  start: string | Date; // format: yyyy-mm-dd
  finish: string | Date; // format: yyyy-mm-dd
  priority?: number;
  duration?: number; // in days
  links?: string[];
  formGroup?: FormGroup;
}

export interface IColumn {
  index?: number;
  name: string;
  width?: string;
  dataType?: DataTypeEnum;
  isInput?: boolean;
  prop: string;
}

export enum DataTypeEnum {
  STRING ='string',
  DATE = 'date',
  NUMBER = 'number'
}
