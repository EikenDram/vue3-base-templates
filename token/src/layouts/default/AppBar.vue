<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useToggle, useDark } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()
const { drawer } = storeToRefs(useAppStore())
const route = useRoute()
const breadcrumbs = computed(() => {
  return route!.matched
    .slice(1)
    .filter((item) => item.meta && item.meta.title && !(item.meta?.breadcrumb === 'hidden'))
    .map((r) => ({
      title: r.meta.title!,
      disabled: r.meta?.breadcrumb === 'disabled' || r.path === route.path || false,
      to: r.path
    }))
})
const isDark = useDark({
  onChanged(dark: boolean) {
    theme.global.name.value = dark ? 'dark' : 'light'
  }
})
const toggleDark = useToggle<true, false | null>(isDark)
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-breadcrumbs :items="breadcrumbs" />
    <v-spacer />
    <div id="app-bar" />
    <div>
      <v-switch
        :model-value="isDark"
        hide-details
        density="compact"
        inset
        false-icon="fas fa-sun"
        true-icon="fas fa-moon"
        @update:model-value="toggleDark"
      />
    </div>
    <v-btn icon href="https://github.com/EikenDram/" size="small" class="ml-2" target="_blank">
      <v-icon size="30" icon="fa-brands fa-github" />
    </v-btn>
    <!-- 2D: add user menu here with profile and logoff -->
  </v-app-bar>
</template>

<style scoped>
:deep(.v-breadcrumbs-divider) {
  opacity: 0.5;
}
:deep(.v-switch__thumb .v-icon) {
  --v-icon-size-multiplier: 1.2 !important;
}
</style>
