import { useAuthStore } from '@/stores/auth';

export default class AuthClient {
  protected transformOptions(options: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    const { accessToken } = useAuthStore();

    options.headers = {
      ...options.headers,
      'Authorization': 'Bearer ' + accessToken,
    };
    return Promise.resolve(options);
  }
}

