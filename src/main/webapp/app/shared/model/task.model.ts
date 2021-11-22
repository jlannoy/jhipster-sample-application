import dayjs from 'dayjs';
import { IVehicle } from 'app/shared/model/vehicle.model';

export interface ITask {
  id?: number;
  date?: string | null;
  title?: string | null;
  amount?: number | null;
  vehicle?: IVehicle | null;
}

export const defaultValue: Readonly<ITask> = {};
