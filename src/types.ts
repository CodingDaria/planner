import { Dayjs } from 'dayjs';

export interface IDay {
  date: number;
  day: 0 | 2 | 1 | 3 | 4 | 5 | 6;
  name: string;
  obj: Dayjs;
  formattedDate: string;
}
