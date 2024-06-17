<template>
  <v-alert v-show="!!model" type="error" class="mb-2">
    <b>{{ model?.code }}</b>
    {{ model?.message }}
  </v-alert>
</template>

<script setup lang="ts">
import type { ErrorAlert } from '@/utils/errors'

const model = defineModel<ErrorAlert>()
</script>
