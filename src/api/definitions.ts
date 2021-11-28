export interface User {
  id: string;
  name: string;
  profilePicture: URL;
}

export interface Review {
  id: string;
  time: Date;
  title: string;
  description?: string;
  restaurentId: string;
  menuItem: string;
  image: string;
  tasteScore: Score;
  textureScore: Score;
  visualPresentaionScore: Score;
}

export interface Restaurent {
  id: string;
  name: string;
  physicalAdress: Adress;
  phoneNumber: string;
  openingHours: OpeningHours;
}

export interface Adress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  zipcode: string;
  country: string;
}

export interface OpeningHours {
  monday: { from: string; to: string };
  tuesday: { from: string; to: string };
  wednesday: { from: string; to: string };
  thursday: { from: string; to: string };
  friday: { from: string; to: string };
  saturday: { from: string; to: string };
  sunday: { from: string; to: string };
}

export enum Score {
  Excellent,
  Great,
  Mediocre,
  Bad,
  Horrible,
}
