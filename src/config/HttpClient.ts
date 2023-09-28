
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { NetworkConstants } from "../constants/NetworkConstants";

export abstract class HttpClient {

    protected instance: AxiosInstance | undefined;

    protected createInstance(): AxiosInstance {
        this.instance = axios.create({
            baseURL: NetworkConstants.BASE_URL,
            timeout: NetworkConstants.TIMEOUT,
            headers: {
                'Content-Type': NetworkConstants.CONTENT_TYPE,
            }
        });
        this.initInterceptors();
        return this.instance;
    }

    private initInterceptors(): void {
        this.initRequestInterceptor();
        this.initResponseInterceptor();
    }

    private initResponseInterceptor(): void {
        this.instance?.interceptors.response.use(
            this.onResponseSuccess,
            this.onResponseError
        );
    }

    private initRequestInterceptor(): void {
        this.instance?.interceptors.request.use(
            (config: any) => {
                // handle API KEYS and AUTH headers here
                if (config.url.includes('api.spoonacular')) {
                    config.headers['X-RapidAPI-Key'] = NetworkConstants.API_KEY;
                }
                return config;
            }
        );

    }

    private onResponseError(error: any): Promise<any> {
        return Promise.reject(error);
    }

    private onResponseSuccess({ data }: AxiosResponse): any {
        return data;
    }

}
