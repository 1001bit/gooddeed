export interface ProfileData {
  id: number;
  name: string;
  role: "Волонтёр" | "Организатор";
  region: string;
  hours: number;
}

const profileMock: ProfileData = {
  id: 1,
  name: "Шалманов Максим",
  role: "Волонтёр",
  region: "Минск",
  hours: 100,
};

export const getProfileMock = (): ProfileData => ({ ...profileMock });
