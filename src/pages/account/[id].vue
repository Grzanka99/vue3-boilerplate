<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMouse } from '@vueuse/core';

const route = useRoute();

const { x, y } = useMouse();

const userNAme = computed(() => route.params.id);
</script>

<template>
  <div>
    <h1>{{ userNAme }}</h1>
    <h2>x: {{ x }} y: {{ y }}</h2>
  </div>
</template>
