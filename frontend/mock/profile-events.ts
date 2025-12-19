import type { EventData } from "@/components/Profile/event-card";

const profileEventsMock: EventData[] = [
  {
    image: "https://i.ibb.co/d0qnQvDC/image.png",
    text: "Дай лесу новае жыццё",
    region: "Налибокская Пуща",
    hours: 5,
    people: 20,
    holder: "Академия Национальной Безопасности",
    startAt: "25.11.2025",
    past: true,
    description: `
Республиканская акция «Дай лесу новае жыццё»

25 октября лицеисты вместе с педагогами приняли участие в акции по восстановлению лесов «Дай лесу новае жыццё», которая прошла в рамках республиканского субботника на территории ГЛХУ «Ивьевский лесхоз».

☔️ Несмотря на дождливую погоду, настроение было бодрым, а цель — важной: восстановить лесные массивы и внести свой вклад в озеленение родного края. Слаженной командой участники высадили около 5500 саженцев сосен и берёз на площади 2 гектара.
    `,
  },
  {
    image: "https://extxe.com/wp-content/uploads/2019/04/%D0%BB%D0%B5%D1%81-1.jpg",
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
    image: "https://extxe.com/wp-content/uploads/2019/04/%D0%BB%D0%B5%D1%81-1.jpg",
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzj2Zl_Fw5WZ3CPR86fG2wQ9TNpENSL7JtSQ&s",
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

