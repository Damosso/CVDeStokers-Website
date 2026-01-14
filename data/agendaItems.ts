export interface AgendaItem {
  id: number;
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
  description: string;
  type: 'meeting' | 'party' | 'social' | 'carnaval' | string;
}

export const agendaItems: AgendaItem[] = [
  {
    id: 1,
    day: '',
    month: '',
    title: 'placeholder',
    location: "",
    time: '',
    description: 'agenda komt later online',
    type: ''
  }
];
