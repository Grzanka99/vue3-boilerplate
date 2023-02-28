import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAccountStore = defineStore('account', () => {
  const username = ref(localStorage.getItem('account.username') || '');

  const setUsername = (newUsername: string) => {
    username.value = newUsername;
    localStorage.setItem('account.username', newUsername);
  };

  return {
    username,
    setUsername,
  };
});
