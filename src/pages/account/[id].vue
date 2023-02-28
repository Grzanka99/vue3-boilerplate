<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useMouse } from '@vueuse/core';

const route = useRoute();

const { x, y } = useMouse();

const userid = computed(() => route.params);
</script>

<template>
  <h1>{{ userid }}</h1>
  <h2>x: {{ x }} y: {{ y }}</h2>
</template>
