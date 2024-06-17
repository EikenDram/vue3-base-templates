<script setup lang="ts">
import type { INavigationItem } from '@/services/navigation'
import { computed, toRef } from 'vue'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { level = 0, item } = defineProps<{
  level?: number
  item: INavigationItem
}>()

const isItem = computed(() => item.children.length < 1)
const title = toRef(() => item.title)
const icon = toRef(() => item.icon)
</script>

<template>
  <v-list-item
    v-if="isItem && icon"
    :to="item.route"
    :prepend-icon="icon"
    active-class="text-primary"
    :title="t(title)"
  />
  <v-list-group v-else-if="icon" :prepend-icon="icon" color="primary">
    <template #activator="{ props: vProps }">
      <v-list-item :title="t(title)" v-bind="vProps" />
    </template>
    <AppNavigationItem
      v-for="child in item.children"
      :key="child.title"
      :item="child"
      :level="level + 1"
    />
  </v-list-group>
</template>
