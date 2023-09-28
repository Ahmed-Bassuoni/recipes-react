import { ApiResponse } from "./ApiResponse";

export class PaginationResponse<T> extends ApiResponse<T[]>{
    totalResults: number = 0;
    offset:       number = 0;
    number:       number = 0;
    data: T[] = [];
}
