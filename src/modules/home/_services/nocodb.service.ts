import { endpoints } from '@/shared/configs';
import { CONFIG } from '@/global-config';
import type { Company, NocoDbResponse, Seminar } from '../_types';

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

    return await response.json()
  } catch (error) {
    console.error(error)

    return getDefaultNocoDbResponse<Company>()
  }

}

export async function getSeminars(): Promise<NocoDbResponse<Seminar>> {
  try {
    if (CONFIG.isComingSoon) {
      return getDefaultNocoDbResponse<Seminar>()
    }
    
    const response = await fetch(endpoints.seminar.records, {
      headers: baseHeader,
    });

    return await response.json()
  } catch (error) {
    console.error(error)

    return getDefaultNocoDbResponse<Seminar>()
  }
}
