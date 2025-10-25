import Image from 'next/image';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/components/ui/tabs';
import { Cloud, SeminarTable } from '@/modules/home/_components';
import { fDate, formatStr } from '@/shared/utils';
import type { SeminarDay } from '../_types';

type Props = {
  seminarList: SeminarDay[];
};

export default function Seminar({ seminarList }: Props) {
  return (
    <article className="relative z-0 mx-auto flex flex-col bg-black py-24 lg:py-36">
      <Cloud />
      
      <div className="relative mx-auto flex w-10/12 flex-col md:w-7/12">
        <div className="small-circle xl:-left-30 xl:-top-30 absolute -left-10 -top-10 h-20 w-20 rounded-full bg-linear-orange-red opacity-50 blur-2xl sm:-left-8 sm:-top-8 sm:h-16 sm:w-16 md:-left-24 md:-top-24 md:h-48 md:w-48 md:opacity-25 xl:h-60 xl:w-60"></div>
        <div className="big-circle sm:-left-18 absolute -left-16 -top-12 h-24 w-32 rounded-full bg-orange-flare opacity-50 blur-3xl sm:-top-14 sm:h-28 sm:w-36 md:-left-40 md:-top-32 md:h-64 md:w-80 md:opacity-25 xl:-left-36 xl:-top-40 xl:h-96 xl:w-72"></div>
        <h2 className="z-10 w-full text-3xl font-bold sm:text-3xl md:text-4xl">
          กำหนดการสัมมนา
        </h2>
        {seminarList.length <= 0 && (
          <p className="z-10 mt-2 w-full text-2xl font-bold md:text-2xl">
            ไม่พบกำหนดการ
          </p>
        )}

        <Tabs defaultValue="day1" className="z-10 flex flex-col gap-2 sm:gap-5">
          <TabsList className="lg:gap-15 mx-0 my-2 flex w-fit gap-10 overflow-x-auto pb-2 font-bold sm:mx-10 sm:my-3 sm:overflow-visible md:mx-2 md:gap-6">
            {seminarList.map((seminarSlot, index) => (
              <TabsTrigger
                key={index + 1}
                value={`day${index + 1}`}
                className="flex flex-shrink-0 items-baseline gap-2 border-b-4 border-b-gray-500 text-xl text-white transition-colors duration-300 data-[state=active]:border-b-orange-300 data-[state=active]:text-orange-300 sm:gap-5 sm:py-2 md:text-2xl"
              >
                <span className="text-lg sm:text-xl md:text-2xl">
                  Day {index + 1}{' '}
                </span>
                <span className="sm:text-lg md:text-xl">
                  {fDate(seminarSlot.date, formatStr.longDate)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
          {seminarList.map((seminarSlot, index) => (
            <TabsContent key={index + 1} value={`day${index + 1}`}>
              <SeminarTable seminars={seminarSlot.seminars} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </article>
  );
}
