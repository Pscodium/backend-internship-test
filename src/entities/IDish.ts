import { IRestaurant } from './IRestaurant';

interface IDish {
  id?: string;
  name: string;
  price: number;
  createdAt?: Date;
  restaurantId: string;
  restaurant: IRestaurant;
}

export { IDish };