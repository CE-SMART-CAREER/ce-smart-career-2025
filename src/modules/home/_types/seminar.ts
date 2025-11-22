export type Seminar = {
  Id: number;
  CreatedAt: string;
  UpdatedAt: string;
  startAt: string;
  endAt: string;
  company: { Id: number };
  room: number;
};

export type SeminarSlot = {
  room: number
  startAt: string;
  endAt: string;
  company: string;
};

export type SeminarDay = {
  date: string;
  seminars: SeminarSlot[];
};
