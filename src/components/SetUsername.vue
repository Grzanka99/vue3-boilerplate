<script setup lang="ts">
import { useAccountStore } from '@/stores/account.store';
import { ref } from 'vue';

const accountStore = useAccountStore();

const tempUsername = ref<string>(accountStore.username);

const handleChangeUsername = () => {
  accountStore.setUsername(tempUsername.value);
};
</script>

<template>
  <form @submit.prevent="handleChangeUsername">
    <input v-model="tempUsername" type="text" />
    <button type="submit">Set Username</button>
  </form>
</template>
