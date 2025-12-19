import type { ProfileData } from "@/components/Profile/profile-panel";

const profileMock: ProfileData = {
  name: "Шалманов Максим",
  pfp: "https://i.ibb.co/BKLndMDz/IMG-20251213-144549-2.jpg",
  role: "Волонтёр",
  region: "Минск",
  hours: 100,
};

export const getProfileMock = (): ProfileData => ({ ...profileMock });

