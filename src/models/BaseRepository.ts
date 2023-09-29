import { AxiosResponse } from "axios";
import { ApiResponse } from "./ApiResponse";
import { IBaseRepository } from "./IBaseRepository";
import { HttpClient } from "../config/HttpClient";
import { NetworkConstants } from "../constants/NetworkConstants";
import { PaginationResponse } from "./PaginationResponse";


export abstract class BaseRepository<T> extends HttpClient implements IBaseRepository<T> {
    protected collection: string | undefined;

    protected transformResponse(response: AxiosResponse): Promise<ApiResponse<T>> {
        return new Promise((resolve, reject) => {
            const result: ApiResponse<T> = {
                data: response.data,
                succeeded: response.status === 200,
                errors: response.data.errors,
            };
            resolve(result);
        });
    }

    protected transformPaginationResponse(response: AxiosResponse): Promise<PaginationResponse<T[]>> {
        console.log('transformPaginationResponse: ', response);
        return new Promise((resolve, reject) => {
            const result: PaginationResponse<T[]> = {
                data: response.data.results,
                totalResults: response.data.totalResults,
                offset: response.data.offset,
                number: response.data.number,
                succeeded: response.status === 200,
                errors: response.data.errors,
            };
            resolve(result);
        });
    }

    async get(id: any, collectionExt?: string): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.get(`${NetworkConstants.BASE_URL}/${this.collection}${collectionExt ? '/' + collectionExt : ''}/${id}`);
        return await this.transformResponse(result) as ApiResponse<T>;
    }
    async getMany(params?: any, collectionExt?: string): Promise<PaginationResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.get(`${NetworkConstants.BASE_URL}/${this.collection}${collectionExt ? '/' + collectionExt : ''}`, params);
        return await this.transformPaginationResponse(result) as PaginationResponse<T>;
    }

    async create(id: any, item: T, collectionExt?: string): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.post(`${NetworkConstants.BASE_URL}/${this.collection}${collectionExt ? '/' + collectionExt : ''}/${id}`, item);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

    async update(id: any, item: T, collectionExt?: string): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.put(`${NetworkConstants.BASE_URL}/${this.collection}${collectionExt ? '/' + collectionExt : ''}/${id}`, item);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

    async delete(id: any, collectionExt?: string): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.delete(`${NetworkConstants.BASE_URL}/${this.collection}${collectionExt ? '/' + collectionExt : ''}/${id}`);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

}
