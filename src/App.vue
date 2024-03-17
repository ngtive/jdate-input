<script setup lang="ts">

import DateInput from '@/components/DateInput.vue';
import { ref } from 'vue'

const date = ref();
</script>

<template>
  <div class="container mx-auto h-screen flex items-center justify-center">
    <div class="w-full">
      <h2 class="text-sm">Default input</h2>
      <DateInput class="border-2 border-black rounded p-1" />
    </div>
  </div>
</template>

<style scoped>
</style>
