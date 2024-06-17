import { type RemovableRef, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { LocationQueryValue } from 'vue-router';

type AuthState = {
  stateAuthorizationCode: RemovableRef<string>;
  temporaryToken: RemovableRef<string> | LocationQueryValue[];
  accessToken: RemovableRef<string>;
  refreshToken: RemovableRef<string>;
  codeVerifier:RemovableRef<string>;
  secretCodeChallenge: RemovableRef<string>;
  returnUrl: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    stateAuthorizationCode: useStorage('auth.stateAuthorizationCode', ''),
    temporaryToken: useStorage('auth.temporaryToken', ''),
    accessToken: useStorage('auth.accessToken', ''),
    refreshToken: useStorage('auth.refreshToken', ''),
    codeVerifier: useStorage('auth.codeVerifier', ''),
    secretCodeChallenge: useStorage('auth.secretCodeChallenge', ''),
    returnUrl: '',
  } as AuthState),
  actions: {
    reset () {
      // Manually update state as local storage and states are linked now
      this.stateAuthorizationCode = ''
      this.temporaryToken = ''
      this.accessToken = ''
      this.refreshToken = ''
      this.codeVerifier = ''
      this.secretCodeChallenge = ''
      this.returnUrl = ''
    }
  }
})
