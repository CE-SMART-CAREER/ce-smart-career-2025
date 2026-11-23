import { endpoints } from '@/shared/configs';
import { CONFIG } from '@/global-config';
import type { Company, NocoDbCompany, NocoDbResponse, Seminar } from '../_types';

const baseHeader = {
  'xc-token': CONFIG.nocodb.token,
};

const getDefaultNocoDbResponse = <T>(): NocoDbResponse<T> => {
  return {
      list: [],
      pageInfo: {
        totalRows: 0,
        page: 1,
        pageSize: 10,
        isFirstPage: true,
        isLastPage: true
      }
    }
}

export async function getCompanies(): Promise<NocoDbResponse<Company>> {
  // TEMP DEMO MOCK - revert before committing
  return {
    list: [
      { Id: 1, name: 'บริษัท ทดสอบ เอ', description: 'demo', contact: '', url: '', date: '2026-12-15', type: '', nc_pejk___seminar_id: 0, logo: '' },
      { Id: 2, name: 'บริษัท ทดสอบ บี', description: 'demo', contact: '', url: '', date: '2026-12-16', type: '', nc_pejk___seminar_id: 0, logo: '' },
    ] as Company[],
    pageInfo: { totalRows: 2, page: 1, pageSize: 10, isFirstPage: true, isLastPage: true },
  }

  try {
    if (CONFIG.isComingSoon) {
      return getDefaultNocoDbResponse<Company>()
    }

    const response = await fetch(endpoints.company.records, {
      headers: baseHeader,
    });

    const companies = await response.json()
    companies.list = transformCompanies(companies.list)

    return companies
  } catch (error) {
    console.error(error)

    return getDefaultNocoDbResponse<Company>()
  }

}

function transformCompanies(companies: NocoDbCompany[]): Company[] {
  const tranformed: Company[] = []

  companies.forEach(company => {
    const comp: Company = {
      ...company,
      logo: CONFIG.nocodb.apiUrl + '/' + company.logo[0].path
    }

    tranformed.push(comp)
  });

  return tranformed
}

export async function getSeminars(): Promise<NocoDbResponse<Seminar>> {
  // TEMP DEMO MOCK - revert before committing
  return {
    list: [
      { Id: 1, CreatedAt: '', UpdatedAt: '', startAt: '2026-12-15 09:00:00', endAt: '2026-12-15 10:00:00', company: { Id: 1 }, room: 810 },
      { Id: 2, CreatedAt: '', UpdatedAt: '', startAt: '2026-12-15 09:00:00', endAt: '2026-12-15 10:00:00', company: { Id: 2 }, room: 811 },
      { Id: 3, CreatedAt: '', UpdatedAt: '', startAt: '2026-12-15 10:30:00', endAt: '2026-12-15 11:30:00', company: { Id: 2 }, room: 810 },
      { Id: 4, CreatedAt: '', UpdatedAt: '', startAt: '2026-12-16 09:00:00', endAt: '2026-12-16 10:00:00', company: { Id: 1 }, room: 810 },
      { Id: 5, CreatedAt: '', UpdatedAt: '', startAt: '2026-12-16 13:00:00', endAt: '2026-12-16 14:00:00', company: { Id: 2 }, room: 811 },
    ] as Seminar[],
    pageInfo: { totalRows: 5, page: 1, pageSize: 10, isFirstPage: true, isLastPage: true },
  }

  try {
    if (CONFIG.isComingSoon) {
      return getDefaultNocoDbResponse<Seminar>()
    }

    const options = {
      method: 'GET',
      headers: baseHeader,
    };
    const response = await fetch(endpoints.seminar.records, options)

    return await response.json()
  } catch (error) {
    console.error(error)

    return getDefaultNocoDbResponse<Seminar>()
  }
}
