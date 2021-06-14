import { IAddress } from './address.interface';

interface ILocation {
  type: string;
  coordinates: [number];
}

export interface IApartment {
 _id: string;
  apartmentNo: string;
  totalRooms: number;
  isAvailable: boolean;
  location: ILocation;
  address: IAddress;
  rentAmount: number;
  isFurnished: boolean;
  owner_id: string;
}
