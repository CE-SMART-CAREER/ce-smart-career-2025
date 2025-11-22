import dayjs from 'dayjs';
import type { SeminarSlot, SeminarDay } from '../_types';
import { getCompanies, getSeminars } from '../_services';

export async function getSeminarsGroupedByDay(): Promise<SeminarDay[]> {
  const seminarList: SeminarDay[] = [];
  const seminarDBList = await getSeminars().then((res) => res.list);
  const companyDBList = await getCompanies().then((res) => res.list);

  seminarDBList?.forEach((seminar) => {
    if (!dayjs(seminar.startAt).isValid() || !dayjs(seminar.endAt).isValid()) {
      return;
    }

    const companyName = companyDBList.find(
      (c) => c.Id == seminar.company?.Id,
    )?.name;
    if (!companyName) {
      return;
    }

    const seminarDate = seminar.startAt.split(' ')[0];
    let seminarDay = seminarList.find((day) => day.date === seminarDate);
    if (!seminarDay) {
      seminarDay = { date: seminarDate, seminars: [] };
      seminarList.push(seminarDay);
    }

    const newSeminar: SeminarSlot = {
      room: seminar.room,
      startAt: seminar.startAt,
      endAt: seminar.endAt,
      company: companyName,
    };

    seminarDay.seminars.push(newSeminar);
  });

  return seminarList;
}
