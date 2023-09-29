import { ApiResponse } from "./ApiResponse";
import { PaginationResponse } from "./PaginationResponse";

export interface IBaseRepository<T> {
    get(id: any): Promise<ApiResponse<T>>;
    getMany(): Promise<PaginationResponse<T>>;
    create(id: any, item: T): Promise<ApiResponse<T>>;
    update(id: any, item: T): Promise<ApiResponse<T>>;
    delete(id: any): Promise<ApiResponse<T>>;
}
