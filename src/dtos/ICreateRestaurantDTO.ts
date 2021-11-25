import { ICreateDishDTO } from "./ICreateDishDTO";

interface ICreateRestaurantDTO {
  name: string;
  phone: string;
  dishes: ICreateDishDTO[];
}

export { ICreateRestaurantDTO };