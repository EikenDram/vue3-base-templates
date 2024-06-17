<template>
  <v-empty-state
    :headline="t('404.headline')"
    :action-text="t('404.button')"
    :title="t('404.title')"
    :text="t('404.text')"
    icon="fa-solid fa-ban"
    @click:action="backToPreviousPage"
  ></v-empty-state>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const backToPreviousPage = () => {
  router.go(-1)
}

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ inheritLocale: true })
</script>

<style scoped>
section {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
}

h1,
h2 {
  text-align: center;
}

.title-404 {
  margin: 10px 0px;
  padding: 0px 0px;

  font-size: xx-large;
  display: block;
}

#back-button {
  color: var(--huskyfy-black);
}
</style>
