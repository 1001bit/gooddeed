export interface EventData {
  id: number;
  text: string;
  region: string;
  hours: number;
  people: number;
  description: string;
  holder: string;
  past: boolean;
  startAt?: string;
}

const profileEventsMock: EventData[] = [
  {
    id: 1,
    text: "Дай лесу новае жыццё",
    region: "Налибокская Пуща",
    hours: 5,
    people: 20,
    holder: "Академия Национальной Безопасности, Лицей БГУ",
    startAt: "25.11.2025",
    past: true,
    description: `
Республиканская акция «Дай лесу новае жыццё»

25 октября лицеисты вместе с педагогами приняли участие в акции по восстановлению лесов «Дай лесу новае жыццё», которая прошла в рамках республиканского субботника на территории ГЛХУ «Ивьевский лесхоз».

☔️ Несмотря на дождливую погоду, настроение было бодрым, а цель — важной: восстановить лесные массивы и внести свой вклад в озеленение родного края. Слаженной командой участники высадили около 5500 саженцев сосен и берёз на площади 2 гектара.
    `,
  },
  {
    id: 2,
    text: "Посадка леса",
    region: "Минск",
    hours: 5,
    people: 20,
    holder: "БРСМ",
    startAt: "16.12.2025",
    past: true,
    description: "Описание",
  },
  {
    id: 3,
    text: "Посадка леса",
    region: "Минск",
    hours: 5,
    people: 20,
    holder: "БРСМ",
    startAt: "16.12.2025",
    past: true,
    description: "Описание",
  },
  {
    id: 4,
    text: "Посадка леса",
    region: "Минск",
    hours: 5,
    people: 20,
    holder: "БРСМ",
    startAt: "19.12.2025",
    past: false,
    description: "Описание",
  },
];

export const getProfileEventsMock = (): EventData[] =>
  profileEventsMock.map((event) => ({ ...event }));
