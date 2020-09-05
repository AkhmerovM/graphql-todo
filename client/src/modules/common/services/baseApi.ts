import { TErrorResponse, TSuccessResponse } from 'types/types';

type TOptions = {
    headers?: {
        'Content-Type': 'application/json' | 'application/x-www-form-urlencoded' | 'text/html; charset=utf-8' | 'multipart/form-data; boundary=something',
    },
    body?: string,
    mode?: 'cors' | 'no-cors' | 'same-origin',
    cache?: 'no-cache' | 'default' | 'force-cache' | 'no-store' | 'only-if-cached' | 'reload',
    credentials?: 'same-origin' | 'include' | 'omit',
}

function parseOptions(options: TOptions): TOptions {
    return {
        // @ts-ignore
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
        body: JSON.stringify(options.body),
    };
}
type TRequest = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';

export class BaseApi {
    protected domain: string;

    constructor(domain: string) {
        this.domain = domain;
    }

    request = async<T>(url: string, type: TRequest, options: TOptions = {}):Promise<TSuccessResponse<T> | TErrorResponse> => {
        const parsedOptions = parseOptions(options);
        const address = `${this.domain}${url}`;
        try {
            const response = await fetch(address, parsedOptions);
            try {
                const data = await response.json();
                return {
                    success: true, data: data.data,
                };
            } catch (e) {
                return {
                    success: false, errors: e,
                };
            }
        } catch (e) {
            return {
                success: false, errors: e,
            };
        }
    }

    get = <T>(url: string, options?: TOptions):Promise<TSuccessResponse<T> | TErrorResponse> => this.request(url, 'GET', options || {});

    post = <T>(url: string, options: TOptions):Promise<TSuccessResponse<T> | TErrorResponse> => this.request(url, 'POST', options);
}
