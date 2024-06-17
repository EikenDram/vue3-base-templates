<template>
  <v-responsive class="border rounded">
    <v-app>
      <AppNavigation />

      <AppBar />

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>

      <AppFooter />
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
// these are not components, so have to manually import them
import AppBar from './AppBar.vue'
import AppNavigation from './AppNavigation.vue'
import AppFooter from './AppFooter.vue'
</script>
