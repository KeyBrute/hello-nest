import { Owl } from "../interfaces/Owl.interface";

export class CreateOwlDto implements Owl{
    id: number;
    name: string;
    age: number;
    breed: string;
}

export class UpdateOwlDto {
    id: number;
    name: string;
    age: number;
    breed: string;
}

