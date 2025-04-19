import {inject, injectable} from "inversify";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import Constants from "@/core/constants";

@injectable()
export class BaseHttpService{

    protected instance: AxiosInstance

    constructor() {
        this.instance = axios.create({
            baseURL: Constants.BASE_URL,
            timeout: 5000
        })
        this.interceptors()
    }

    private interceptors() {
        this.instance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response.data
            }, (error) => {
                console.log("Request returned error", error)
                return Promise.reject(error)
            }
        )
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get(url, config)
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post(url, data, config)
    }

}