<template>
  <v-footer app class="text-center d-flex flex-column">
    <div>
      {{ new Date().getFullYear() }} —
      <a href="https://github.com/eikendram" class="font-weight-bold text-primary" target="_blank"
        >AikenDrum</a
      >
    </div>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.v-footer {
  padding: 0px 10px !important;
  > .v-btn--icon {
    .v-icon {
      height: 1.25em;
      width: 1.25em;
    }
  }
}
</style>
