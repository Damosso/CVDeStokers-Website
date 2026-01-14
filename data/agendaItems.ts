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
    day: '22',
    month: 'APR',
    title: 'Ledenvergadering',
    location: "Cafe 't Hart van Rooi",
    time: '20:00',
    description: 'Jaarlijkse vergadering voor alle leden. We bespreken het afgelopen seizoen en de plannen voor komend jaar.',
    type: 'meeting'
  },
  {
    id: 2,
    day: '15',
    month: 'MEI',
    title: 'Thema Vrijdag: Foute Party',
    location: "Ons Thuys",
    time: '21:00',
    description: 'Trek je foutste pakje aan en kom dansen op de beste hits!',
    type: 'party'
  },
  {
    id: 3,
    day: '10',
    month: 'JUN',
    title: 'Zomer BBQ',
    location: 'De Kienehoef',
    time: '15:00',
    description: 'Gezellig samen eten en drinken om de zomer in te luiden. Inschrijven verplicht!',
    type: 'social'
  },
  {
    id: 4,
    day: '11',
    month: 'NOV',
    title: 'Ellufde van de Ellufde',
    location: 'De Markt',
    time: '11:11',
    description: 'De officiële start van het carnavalsseizoen. Daar moet je bij zijn!',
    type: 'carnaval'
  },
  {
    id: 5,
    day: '08',
    month: 'FEB',
    title: 'Grote Optocht Papgat',
    location: 'Centrum Sint-Oedenrode',
    time: '13:30',
    description: 'Wij lopen mee met onze nieuwe wagen! Kom kijken en zwaaien!',
    type: 'carnaval'
  }
];