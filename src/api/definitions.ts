export interface User {
  id: string;
  name: string;
  profilePicture: URL;
}

export interface Review {
  id: string;
  title: string;
  description?: string;
  restaurentId: string;
  menuItem: string;
  image: URL;
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
  monday: { from: Date; to: Date };
  tuesday: { from: Date; to: Date };
  wednesday: { from: Date; to: Date };
  thursday: { from: Date; to: Date };
  friday: { from: Date; to: Date };
  saturday: { from: Date; to: Date };
  sunday: { from: Date; to: Date };
}

export enum Score {
  Excellent,
  Great,
  Mediocre,
  Bad,
  Horrible,
}
