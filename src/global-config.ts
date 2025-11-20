import { Seminar } from "./modules/home/_sections";

export type ConfigValue = {
  env: 'development' | 'production' | 'test';
  isComingSoon: boolean;
  nocodb: {
    apiUrl: string;
    token: string;
    companyDb: string;
    seminarDb: string;
  };
  date: {
    years: string;
    seminarFirstDayDate: string // mm-dd-yy
    seminarSecondDayDate: string // mm-dd-yy
  }
};

export const CONFIG: ConfigValue = {
  env: process.env.NODE_ENV,
  isComingSoon: process.env.IS_COMING_SOON === "true",
  nocodb: {
    apiUrl: process.env.NOCODB_API_URL ?? '',
    token: process.env.NOCODB_API_TOKEN ?? '',
    companyDb: process.env.NOCODB_COMPANY_DB ?? '',
    seminarDb: process.env.NOCODB_SEMINAR_DB ?? '',
  },
  date: {
    seminarFirstDayDate: process.env.SEMINAR_FIRST_DAY_DATE ?? '',
    seminarSecondDayDate: process.env.SEMINAR_SECOND_DAY_DATE ?? '',
    years: process.env.YEARS ?? new Date().getFullYear().toString()
  }
};
