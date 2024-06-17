import { useAuthStore } from '@/stores/auth'

import { Client, LoginRequest } from '@/api/api';

/**
 * Authentication service for backend API
 */
export class AuthService {
  /**
   * Login into backend API using provided email and password
   * @param email email
   * @param password password
   * @returns Return URL, if login successful
   */
  public async login(email: string, password: string): Promise<string> {
    const auth = useAuthStore();

    const c = new Client();
    const res = await c.postIdentityLogin(false, false, new LoginRequest({ email: email, password: password}))
    if (res.accessToken)
      auth.$patch({ accessToken: res.accessToken })
    return auth.returnUrl;
  }

  /**
   * Logout from backend API
   */
  logout(): void {
    const auth = useAuthStore();
    auth.$patch({ accessToken: undefined });
  }
}

export default new AuthService();