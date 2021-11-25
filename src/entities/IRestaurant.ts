import { IDish } from './IDish';

interface IRestaurant {
  id?: string;
  name: string;
  phone: string;
  createdAt?: Date;
  dishes: IDish[];
}

export { IRestaurant }