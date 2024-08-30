import type { FetchResponse } from 'ofetch';
export interface ResOptions<T> {
    code: number
    data: T
    msg: string
}

export enum ResponseStatusCodes {
    SUCCESS = 200,
    HTTP_ERROR = 404,
    SERVE_ERROR = 500,
}
const handleFail = <T>(
    response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>
) => {
    return Promise.reject(new Error('网络服务异常'));
};
const handleResponse = <T>(
    response: FetchResponse<ResOptions<T>> & FetchResponse<ResponseType>
): any => {
    if (response._data?.code === ResponseStatusCodes.SERVE_ERROR) {
        navigateTo('/error/500.html')
        return Promise.reject(new Error(response._data.msg));
    }
    if (response._data?.code === ResponseStatusCodes.HTTP_ERROR) {
        navigateTo('/error/404.html')
        return Promise.reject(new Error(response._data.msg));
    }
};
export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
    const useFetch = $fetch.create({
        onRequest({ options }) {
            options.baseURL = runtimeConfig.public.apiBaseURL;
            options.headers = new Headers(options.headers);
        },
        onResponse({ response }): any {
            if (response.status !== ResponseStatusCodes.SUCCESS) {
                return handleFail(response);
            }
            if (response._data?.code === ResponseStatusCodes.SUCCESS) {
                response._data =response._data.data
            } else {
            return handleResponse(response);
            }
        },
        onResponseError({ response }) {
            navigateTo('/error/404.html')
        }
    });
    return {
        provide: { useFetch }
    };
});