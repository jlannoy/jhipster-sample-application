import { ITask } from 'app/shared/model/task.model';

export interface IVehicle {
  id?: number;
  name?: string | null;
  plate?: string | null;
  tasks?: ITask[] | null;
}

export const defaultValue: Readonly<IVehicle> = {};
