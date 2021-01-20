import { Racoon } from "../interfaces/racoon.interface";

export class CreateRacoonDto implements Racoon {
    id: number;
    name: string;
    age: number;
    breed: string;
}

export class UpdateRacoonDto {
    id: number;
    name: string;
    age: number;
    breed: string;
}

