<template>
  <div>
    <div class="text-caption">{{ t($props.title) }}</div>
    <v-slider
      v-model="model"
      :step="props.step"
      :max="props.max"
      :min="props.min"
      class="align-center"
      hide-details
      :readonly="readonly"
    >
      <template v-slot:append>
        <v-text-field
          v-model="model"
          density="compact"
          style="width: 70px"
          type="number"
          hide-details
          single-line
          readonly
        ></v-text-field>
      </template>
    </v-slider>
  </div>
</template>

<script setup lang="ts">
// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const model = defineModel<string | number | undefined>()

const props = defineProps({
  title: { type: String, required: true },
  step: Number,
  max: Number,
  min: Number,
  readonly: { type: Boolean, default: false }
})
</script>

<style scoped></style>
