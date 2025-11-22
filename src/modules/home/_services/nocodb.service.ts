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
