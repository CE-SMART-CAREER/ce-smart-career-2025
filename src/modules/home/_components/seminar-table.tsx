import type { SeminarSlot } from '../_types';
import { formatStr, fTime } from '@/shared/utils';
import { GradientCard } from '@/shared/components';

type Props = {
  seminars: SeminarSlot[];
};

export function SeminarTable({ seminars }: Props) {
  const groupByStartTime = new Map<string, SeminarSlot[]>()

  seminars.forEach(s => {
    const time = `${fTime(s.startAt, formatStr.time24Hr)}-${fTime(s.endAt, formatStr.time24Hr)}`
    const startGroup = groupByStartTime.get(time)
    if (!startGroup) {
      groupByStartTime.set(time, [s])
    } else {
      startGroup.push(s)
    }
  })

  return (
    <GradientCard className="overflow-auto rounded-lg bg-linear-gray-orange p-0.5">
      <table className="w-full table-auto border-collapse animate-fade rounded-lg border-none">
        <thead>
          <tr>
            <th className="md:pl-15 mx-6 w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              เวลา
            </th>
            <th className="w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              ห้อง 810
            </th>
            <th className="w-1/3 animate-fade border-b-2 border-gray-500 p-2 text-left md:px-10 md:py-6 lg:py-8 lg:pl-20">
              ห้อง 811
            </th>
          </tr>
        </thead>
        <tbody>
          {
            Array.from(groupByStartTime.entries()).map((group, index) => {
              const [ time, seminar ] = group

              return (
                <tr key={index}>
                  <td className="md:pl-15 mx-6 w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
                    {`${time}`}
                  </td>
                
                
                  {getSeminorCompanyName(seminar)}
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </GradientCard>
  );
}

const getSeminorCompanyName = (groupByStartTime: SeminarSlot[]) => {
  const rooms = [810, 811]
  return rooms.map((room, index) => {
    if (room !== groupByStartTime[index]?.room) {
      return (
        <td key={`-${index}-`} className="w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
            -
        </td>
      )
    }

    return (
        <td  key={groupByStartTime[index].company} className="w-1/3 animate-fade border-none p-2 md:px-10 md:py-6 lg:py-8 lg:pl-20">
            {groupByStartTime[index].company}
        </td>
    )
})
}