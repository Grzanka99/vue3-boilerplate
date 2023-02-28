import { defineStore } from 'pinia';
import { ref } from 'vue';

const LS_USERNAME = 'account.username';

export const useAccountStore = defineStore('account', () => {
  const username = ref(localStorage.getItem(LS_USERNAME) || '');

  const setUsername = (newUsername: string) => {
    username.value = newUsername;
    localStorage.setItem(LS_USERNAME, newUsername);
  };

  return {
    username,
    setUsername,
  };
});
