import { cn } from '@/shared/utils/cn';
import { GradientCard } from '@/shared/components';
import { AspectRatio } from '@/shared/components/ui/aspect-ratio';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import Image from 'next/image';

import { DayValueTrigger, tabsContent, tabsTrigger } from '../_constants';
import type { ChartContent, Company, TriggerBtn } from '../_types';
import { Button } from '@/shared/components/ui/button';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/shared/components/ui/tabs';
import { SearchCompany } from '../_components/search-company';
import { useMemo } from 'react';
import { fDate, formatStr } from '@/shared/utils';

type ChartProps = {
  content: ChartContent;
};

type LocationProps = {
  companies: Company[];
};

function Chart({ content }: ChartProps) {
  return (
    <section className="flex w-full flex-col justify-center gap-2 py-5 lg:py-0">
      <AspectRatio className="w-full items-center" ratio={16 / 7}>
        <Image
          src={content.src}
          alt={content.alt}
          fill
          className="animate-fade rounded-sm"
        />
      </AspectRatio>

      <Dialog>
        <DialogTrigger asChild className="block self-start sm:hidden">
          <Button variant="outline">ขยายภาพ</Button>
        </DialogTrigger>
        <DialogContent className="flex w-[90vw] rounded-lg p-9">
          <section className="flex overflow-x-scroll">
            <Image
              src={content.src}
              alt={content.alt}
              width={725}
              height={290}
              className="h-full min-w-[725px] rounded-md"
            />
          </section>
        </DialogContent>
      </Dialog>
    </section>
  );
}


const useTransformCompanies = (companies: Company[]) => {
  const transformed = useMemo(() => {
    const uniqueCompanyName = new Set<string>()
    const duplicatedCompany = new Set<string>()

    companies.forEach(company => {
      if (uniqueCompanyName.has(company.name)) {
        duplicatedCompany.add(company.name)
      } 

      uniqueCompanyName.add(company.name)
    })

    return companies.map(company => {
      if (duplicatedCompany.has(company.name)) {
        company.name = `${company.name} (${fDate(company.date, formatStr.date)})`
      }

      return company
    })
  }, [companies])

  return transformed
}

export default function Location({ companies }: LocationProps) {
  const transformCompanies = useTransformCompanies(companies)
  const activeTabStyle =
    'data-[state=active]:text-orange-300 data-[state=active]:border-b-orange-300';

  return (
    <article className="relative flex w-full flex-col justify-center px-8 py-24 lg:h-svh lg:py-36">
      <section className="mx-auto flex w-full flex-col justify-center gap-5 xl:max-w-screen-xl">
        <h2 className="w-full text-2xl font-bold sm:text-3xl md:text-4xl">
          สถานที่ และ ผังงาน
        </h2>

        <Tabs
          defaultValue={DayValueTrigger.FIRST_DAY}
          className="flex w-full flex-col gap-2 sm:gap-5"
        >
          <TabsList className="lg:gap-15 flex gap-10 overflow-x-auto text-end font-bold sm:overflow-visible">
            {tabsTrigger.map((trigger: TriggerBtn) => {
              return (
                <TabsTrigger
                  className={cn(
                    activeTabStyle,
                    'mb-2 flex flex-shrink-0 items-end justify-end gap-7 rounded-none border-b-4 border-b-gray-500 pb-2 md:gap-10',
                  )}
                  value={trigger.value}
                  key={trigger.value}
                >
                  <span className="h-full text-lg sm:text-xl md:text-2xl">
                    {trigger.mainMsg}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl">
                    {trigger.altMsg}
                  </span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <section className="flex flex-col gap-5 lg:flex-row">
            <GradientCard className="flex h-full w-full items-center justify-center p-5">
              {tabsContent.map((content: ChartContent) => {
                return (
                  <TabsContent
                    className="w-full self-center"
                    value={content.value}
                    key={content.value}
                  >
                    <Chart content={content} />
                  </TabsContent>
                );
              })}
            </GradientCard>

            <GradientCard className="flex max-h-[65svh] w-full flex-grow-0 basis-[45%] flex-col gap-5 p-7 sm:max-h-[50svh] lg:max-h-none lg:p-10">
              <h3 className="text-2xl font-bold text-orange-300">
                ค้นหาชื่อบริษัท
              </h3>
              <SearchCompany companies={transformCompanies} />
            </GradientCard>
          </section>
        </Tabs>
      </section>
    </article>
  );
}
