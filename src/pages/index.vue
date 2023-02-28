<script lang="ts" setup>
import SetUsername from '@/components/SetUsername.vue';
import { useAccountStore } from '@/stores/account.store';

const accountStore = useAccountStore();
</script>
<template>
  <h1>Hello {{ accountStore.username }}</h1>
  <SetUsername />
  <h2>
    <RouterLink :to="`account/${accountStore.username}`">Account</RouterLink>
  </h2>
</template>
