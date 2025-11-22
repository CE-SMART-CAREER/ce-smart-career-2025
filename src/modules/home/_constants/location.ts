import { CONFIG } from '@/global-config';
import type { TriggerBtn, ChartContent } from '../_types';
import { fDate, formatStr } from '@/shared/utils';

const seminarFirstDayDate = '2025-11-27'
const seminarSecondDayDate = '2025-11-28'

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
    src: '/assets/images/plan28.png',
    alt: 'firstDayChart',
  },
  {
    value: DayValueTrigger.SECOND_DAY,
    src: '/assets/images/plan29.png',
    alt: 'secondDayChart',
  },
];
