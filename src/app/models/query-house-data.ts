import { HouseCoordinates } from "./house-coordinates";
import { HouseParameters } from "./house-parameters";

export class QueryHouseData {
    coords: HouseCoordinates;
    params: HouseParameters;
    street: string;
    distanceFromHome: number;
}