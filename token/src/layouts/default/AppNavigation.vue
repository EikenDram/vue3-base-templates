<script setup lang="ts">
//
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

import { navigation } from '@/services/navigation'
import AppNavigationItem from './AppNavigationItem.vue'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { mobile, lgAndUp, width } = useDisplay()

const appStore = useAppStore()
const { drawer: drawerStored } = storeToRefs(appStore)

const drawer = computed({
  get() {
    return drawerStored.value || !mobile.value
  },
  set(val: boolean) {
    drawerStored.value = val
  }
})

const rail = computed(() => !drawerStored.value && !mobile.value)

drawerStored.value = lgAndUp.value && width.value !== 1280
</script>

<template>
  <v-navigation-drawer v-model="drawer" :expand-on-hover="rail" :rail="rail" floating>
    <template #prepend>
      <v-list>
        <v-list-item class="pa-1">
          <template #prepend>
            <v-icon icon="custom:pinpo" size="x-large" class="drawer-header-icon" color="primary" />
          </template>
          <v-list-item-title
            class="text-h5 font-weight-bold"
            style="line-height: 2rem; text-overflow: clip"
          >
            {{ t('app.title') }} <span class="text-primary">{{ t('app.marked') }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <v-list nav density="compact">
      <AppNavigationItem v-for="item in navigation()" :key="item.title" :item="item" />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.v-navigation-drawer {
  overflow: hidden;
  .v-navigation-drawer__content {
    overflow-y: hidden;
    &:hover {
      overflow-y: overlay;
    }
  }
  .drawer-footer {
    transition: all 0.2s;
    min-height: 30px;
  }
  .drawer-header-icon {
    opacity: 1 !important;
    height: 1.2em !important;
    width: 1.2em !important;
    transition: all 0.2s;
    margin-right: -10px;
    margin-left: 10px;
  }
  .v-list-group {
    --prepend-width: 10px;
  }
  .v-list-item {
    transition: all 0.2s;
  }
}
</style>
