import { AxiosResponse } from "axios";
import { ApiResponse } from "./ApiResponse";
import { IBaseRepository } from "./IBaseRepository";
import { HttpClient } from "../config/HttpClient";
import { NetworkConstants } from "../constants/NetworkConstants";


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

    async get(id: any): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.get(`${NetworkConstants.BASE_URL}/${this.collection}/${id}`);
        return await this.transformResponse(result) as ApiResponse<T>;
    }
    async getMany(params?: any): Promise<ApiResponse<T[]>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.get(`${NetworkConstants.BASE_URL}/${this.collection}`, params);
        return await this.transformResponse(result) as ApiResponse<T[]>;
    }

    async create(id: any, item: T): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.post(`${NetworkConstants.BASE_URL}/${this.collection}/${id}`, item);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

    async update(id: any, item: T): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.put(`${NetworkConstants.BASE_URL}/${this.collection}/${id}`, item);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

    async delete(id: any): Promise<ApiResponse<T>> {
        const instance = this.instance || this.createInstance();
        let result: AxiosResponse = await instance.delete(`${NetworkConstants.BASE_URL}/${this.collection}/${id}`);
        return await this.transformResponse(result) as ApiResponse<T>;
    }

}
