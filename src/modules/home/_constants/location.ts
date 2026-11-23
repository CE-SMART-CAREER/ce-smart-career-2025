import { CONFIG } from '@/global-config';
import type { TriggerBtn, ChartContent } from '../_types';
import { fDate, formatStr } from '@/shared/utils';

const seminarFirstDayDate = '2026-12-15'
const seminarSecondDayDate = '2026-12-16'

export enum DayValueTrigger {
  FIRST_DAY = 'firstDay',
  SECOND_DAY = 'secondDay',
}

export const dayMapper = new Map<string, DayValueTrigger>([
  [seminarFirstDayDate, DayValueTrigger.FIRST_DAY],
  [seminarSecondDayDate, DayValueTrigger.SECOND_DAY],
]);

export const tabsTrigger: TriggerBtn[] = [
  {
    value: DayValueTrigger.FIRST_DAY,
    mainMsg: 'Day 1',
    altMsg:  fDate(seminarFirstDayDate, formatStr.longDate) ?? '',
  },
  {
    value: DayValueTrigger.SECOND_DAY,
    mainMsg: 'Day 2',
    altMsg: fDate(seminarSecondDayDate, formatStr.longDate) ?? '',
  },
];

export const tabsContent: ChartContent[] = [
  {
    value: DayValueTrigger.FIRST_DAY,
    src: '/assets/images/plan15.png',
    alt: 'firstDayChart',
  },
  {
    value: DayValueTrigger.SECOND_DAY,
    src: '/assets/images/plan16.png',
    alt: 'secondDayChart',
  },
];
