import { Spider } from "../interfaces/spider.interface";

export class CreateSpiderDto implements Spider {
    id: number;
    name: string;
    age: number;
    breed: string;
    color: string;
}

export class UpdateSpiderDto {
    id: number;
    name: string;
    age: number;
    breed: string;
    color: string;
}