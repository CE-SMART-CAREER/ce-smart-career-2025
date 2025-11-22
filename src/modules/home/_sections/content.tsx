'use client';

import {
  CompanyLogos,
  Description,
  Footer,
  Introduction,
  Location,
  Seminar,
  ComingSoon,
} from '@/modules/home/_sections';
import type { Company, SeminarDay } from '../_types';
import { useCurrentSectionStore } from '../_store/current-section';
import ObserverSection from './observer-section';
import { useCallback, useMemo } from 'react';


type Props = {
  companyId: number;
  companies: Company[];
  seminarList: SeminarDay[];
  isComingSoon: boolean
};

export default function Content({ companyId, companies, seminarList, isComingSoon }: Props) {
  const { setCurrentSection } = useCurrentSectionStore(
    (state) => state.actions,
  );

  const setInView = useCallback((inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView) {
      const sectionId = entry.target.getAttribute('id');

      if (sectionId) {
        setCurrentSection(sectionId);
      }
    }
  }, [setCurrentSection]);

  const content = useMemo(() => {
    if (!isComingSoon) { 
      return (
        <>
          <ObserverSection id="seminar" onChange={setInView}>
            <Seminar seminarList={seminarList} />
          </ObserverSection>
          <ObserverSection id="companies" onChange={setInView}>
            <CompanyLogos 
              companies={companies} 
              selectedCompanyId={companyId} 
            />
          </ObserverSection>
          <ObserverSection id="locations" onChange={setInView}>
            <Location companies={companies} />
          </ObserverSection>
        </>
      ) 
    }

    return (
        <ObserverSection id="coming-soon" onChange={setInView}>
          <ComingSoon />
        </ObserverSection>
      )
  }, [companies, companyId, seminarList, setInView, isComingSoon])

  return (
    <>
      <main>
        <Introduction />
        <ObserverSection id="about" onChange={setInView}>
          <Description />
        </ObserverSection>
        { content }
      </main>
      <Footer />
    </>
  );
}
