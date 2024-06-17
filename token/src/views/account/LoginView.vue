<script setup lang="ts">
import { ref } from 'vue'
import AuthService from '@/services/auth'
import router from '@/router'
import { apiError, type ErrorAlert } from '@/utils/errors'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ inheritLocale: true })

const email = ref('')
const password = ref('')

const loading = ref(false)
const form = ref(false)
const error = ref<ErrorAlert>()

async function onSubmit() {
  error.value = undefined
  if (!form.value) return
  loading.value = true
  try {
    const returnUrl = await AuthService.login(email.value, password.value)
    console.log(returnUrl)
    router.push(returnUrl || '/home')
  } catch (err) {
    error.value = apiError(err)
  } finally {
    loading.value = false
  }
}

function required(v: string) {
  return !!v || t('form.required')
}
</script>

<template>
  <v-layout align-center justify-center>
    <v-card class="mx-auto elevation-12" min-width="344" :title="t('login.title')">
      <v-container>
        <v-alert v-show="!!error" type="error" class="mb-2">
          <b>{{ error?.code }}</b>
          {{ error?.message }}
        </v-alert>
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            name="login"
            type="text"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            :label="t('login.email')"
          ></v-text-field>

          <v-text-field
            v-model="password"
            id="password"
            name="password"
            type="password"
            :readonly="loading"
            :rules="[required]"
            :label="t('login.password')"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            {{ t('login.submit') }}
          </v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-layout>
</template>
