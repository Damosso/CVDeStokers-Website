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
  // --- Vrijdag 13 Februari ---
  {
    id: 1,
    day: '13',
    month: 'Feb',
    title: '4 uurkes Vurraf',
    location: 'Markt',
    time: '13:30',
    description: 'Org: SJC / Papgat',
    type: 'carnaval'
  },
  {
    id: 2,
    day: '13',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '19:30',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 3,
    day: '13',
    month: 'Feb',
    title: 'Dansmarieke festijn de Lèpkes',
    location: 'De Vriendschap, Boskant',
    time: '20:00',
    description: 'Org: C.C. de Lèpkes',
    type: 'party'
  },

  // --- Zaterdag 14 Februari ---
  {
    id: 4,
    day: '14',
    month: 'Feb',
    title: 'Verzamelen Oprit A50',
    location: 'Oprit A50',
    time: '11:00',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 5,
    day: '14',
    month: 'Feb',
    title: 'Opening bij Kappeltje',
    location: 'Everse Kappel',
    time: '11:19',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 6,
    day: '14',
    month: 'Feb',
    title: 'Gezamenlijke Lunch Papbuiken',
    location: 'Ons Thuys',
    time: '12:30',
    description: 'Org: C.V. De Stokers / C.V. De Papbuik',
    type: 'social'
  },
  {
    id: 7,
    day: '14',
    month: 'Feb',
    title: 'Groepsfoto',
    location: 'Kerkplein',
    time: '',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 8,
    day: '14',
    month: 'Feb',
    title: 'Sleutelpresentatie',
    location: 'Markt',
    time: '14:11',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 9,
    day: '14',
    month: 'Feb',
    title: 'Onthulling Willemke Pap',
    location: 'Kerkplein',
    time: '16:00',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 10,
    day: '14',
    month: 'Feb',
    title: 'Carnavalsmis',
    location: 'Kerkplein',
    time: '16:30',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 11,
    day: '14',
    month: 'Feb',
    title: 'Naar de Loopgravers',
    location: 'Olland',
    time: '20:00',
    description: 'Org: C.V. de Loopgravers',
    type: 'party'
  },
  {
    id: 12,
    day: '14',
    month: 'Feb',
    title: 'Eierbal bij de Plekkers',
    location: 'Dommelzicht',
    time: '21:30',
    description: 'Org: C.V. de Plekkers',
    type: 'party'
  },
  {
    id: 13,
    day: '14',
    month: 'Feb',
    title: 'Dweilen door Papgat',
    location: 'Centrum',
    time: '22:30',
    description: 'Org: C.V. de Stokers',
    type: 'party'
  },

  // --- Zondag 15 Februari ---
  {
    id: 14,
    day: '15',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '12:11',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 15,
    day: '15',
    month: 'Feb',
    title: 'Optocht Papgat',
    location: 'Centrum',
    time: '12:49',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 16,
    day: '15',
    month: 'Feb',
    title: 'Prijsuitreiking optocht',
    location: 'Markt',
    time: '16:30',
    description: 'Org: Papgat / SJC',
    type: 'carnaval'
  },
  {
    id: 17,
    day: '15',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '20:00',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 18,
    day: '15',
    month: 'Feb',
    title: 'Dweilen door Papgat',
    location: 'Centrum',
    time: '',
    description: 'Org: C.V. de Stokers',
    type: 'party'
  },

  // --- Maandag 16 Februari ---
  {
    id: 19,
    day: '16',
    month: 'Feb',
    title: 'Gezamenlijk Ontbijt',
    location: 'Ons Thuys',
    time: '10:11',
    description: 'Org: C.V. de Stokers / C.V. de Papbuik',
    type: 'social'
  },
  {
    id: 20,
    day: '16',
    month: 'Feb',
    title: 'Struifbal (Incl. Stokers Kapel)',
    location: 'De Beurs',
    time: '11:00',
    description: 'Org: K.V. De Narrekap',
    type: 'carnaval'
  },
  {
    id: 21,
    day: '16',
    month: 'Feb',
    title: 'Kroegentocht',
    location: 'Centrum',
    time: '13:11',
    description: 'Org: C.V. de Stokers',
    type: 'party'
  },
  {
    id: 22,
    day: '16',
    month: 'Feb',
    title: 'Bezoek aan de Heikneuters',
    location: 'De Beckart',
    time: '15:30',
    description: 'Org: C.V. de Heikneuters',
    type: 'party'
  },
  {
    id: 23,
    day: '16',
    month: 'Feb',
    title: 'Eten met de Club',
    location: 'Locatie T.B.A.',
    time: '18:00',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 24,
    day: '16',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '20:00',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 25,
    day: '16',
    month: 'Feb',
    title: 'Avond bij de Plekkers',
    location: 'Dommelzicht',
    time: '21:30',
    description: 'Org: C.V. De Plekkers',
    type: 'party'
  },
  {
    id: 26,
    day: '16',
    month: 'Feb',
    title: 'Dweilen door Papgat',
    location: 'Centrum',
    time: '',
    description: 'Org: C.V. de Stokers',
    type: 'party'
  },

  // --- Dinsdag 17 Februari ---
  {
    id: 27,
    day: '17',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '10:11',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 28,
    day: '17',
    month: 'Feb',
    title: 'Fruhstucke',
    location: 'De Kroeg',
    time: '10:30',
    description: 'Org: C.V. De Klotjes',
    type: 'social'
  },
  {
    id: 29,
    day: '17',
    month: 'Feb',
    title: 'Snert concert',
    location: 'Oud Rooij',
    time: '11:30',
    description: "Org: C.V. 't Skrothupke / C.V. de Plekkers",
    type: 'carnaval'
  },
  {
    id: 30,
    day: '17',
    month: 'Feb',
    title: 'Kinderoptocht kijken',
    location: 'Ons Thuys',
    time: '14:11',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 31,
    day: '17',
    month: 'Feb',
    title: 'Stokers Muziekbingo',
    location: "D'n Overkant",
    time: '15:00',
    description: 'Org: C.V. de Stokers',
    type: 'party'
  },
  {
    id: 32,
    day: '17',
    month: 'Feb',
    title: 'Verzamelen Ons Thuys',
    location: 'Ons Thuys',
    time: '19:30',
    description: 'Org: C.V. de Stokers',
    type: 'social'
  },
  {
    id: 33,
    day: '17',
    month: 'Feb',
    title: '3 Uurkes vur t End',
    location: 'De Beurs',
    time: '20:30',
    description: 'Org: K.V. De Narrekap',
    type: 'party'
  },
  {
    id: 34,
    day: '17',
    month: 'Feb',
    title: 'Verbranding',
    location: 'Centrum',
    time: '23:30',
    description: 'Org: Papgat',
    type: 'carnaval'
  },
  {
    id: 35,
    day: '17',
    month: 'Feb',
    title: "D'n Afsluiter",
    location: 'Ons Thuys',
    time: '00:00',
    description: 'Org: C.V. de Stokers / C.V. de Papbuik',
    type: 'social'
  }
];
