export type Company = {
  Id: number;
  name: string;
  description: string;
  contact: string;
  url: string;
  logo: string;
  date: string;
  type: string;
  nc_pejk___seminar_id: number;
};

export type NocoDbCompany = {
  Id: number;
  name: string;
  description: string;
  contact: string;
  url: string;
  logo: Attachment[];
  date: string;
  type: string;
  nc_pejk___seminar_id: number;
};

export type Attachment = {
    path: string,
    title: string,
    mimetype: string,
    size: number,
    width: number,
    height: number,
    id: string,
    signedPath: string
}