<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-main>
        <!-- Provides the application the proper gutter -->
        <v-container fluid fill-height>
          <!-- If using vue-router -->
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
//
</script>
