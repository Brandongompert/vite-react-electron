import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export interface DefaultResponseData {
  message?: string;
  data?: object;
}

export interface DefaultError {
  data?: {
    error?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore - VITE_SERVER_URL is defined in .env file
const ApiBaseUrl = `${import.meta.env.VITE_SERVER_URL}/`;

const instance = axios.create({
  baseURL: ApiBaseUrl,
  headers: {
    "Bypass-Tunnel-Reminder": "true",
  },
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    console.error(error);
    return handleError(error);
  }
);

function handleError(error: AxiosError) {
  const { config, response } = error;
  const originalRequest = config;

  switch (response?.status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      break;
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      break;
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      break;
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      break;
    }
  }

  return Promise.reject(error);
}

interface IApiServiceFactory {
  baseURL?: string;
  interceptResponse?: (response: AxiosResponse) => AxiosResponse;
  interceptRequest?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
}

interface ApiService {
  get: typeof instance.get;
  post: typeof instance.post;
  put: typeof instance.put;
  delete: typeof instance.delete;
  request: typeof instance.request;
}

export function CreateApiService({
  baseURL = "",
  interceptResponse,
  interceptRequest,
}: IApiServiceFactory): ApiService {
  if (interceptRequest) {
    instance.interceptors.request.use(interceptRequest);
  }
  if (interceptResponse) {
    instance.interceptors.response.use(interceptResponse);
  }
  const buildURL = (url: string) => `${baseURL}${url}`;
  return {
    get: <T = DefaultResponseData, R = AxiosResponse<T>>(
      url: string,
      config: AxiosRequestConfig
    ): Promise<R> => instance.get<T, R>(buildURL(url), config),
    post: <T = DefaultResponseData, R = AxiosResponse<T>, D = object>(
      url: string,
      data: D,
      config: AxiosRequestConfig
    ): Promise<R> => instance.post<T, R>(buildURL(url), data, config),
    put: <T = DefaultResponseData, R = AxiosResponse<T>, D = object>(
      url: string,
      data: D,
      config: AxiosRequestConfig
    ): Promise<R> => instance.put<T, R>(buildURL(url), data, config),
    delete: <T = DefaultResponseData, R = AxiosResponse<T>>(
      url: string,
      config: AxiosRequestConfig
    ): Promise<R> => instance.delete<T, R>(buildURL(url), config),
    request: <T = DefaultResponseData, R = AxiosResponse<T>>(
      config: AxiosRequestConfig
    ): Promise<R> =>
      instance.request<T, R>({
        url: buildURL(config?.url || ""),
        ...config,
      }),
  };
}

const ApiService = instance;

export default ApiService;
