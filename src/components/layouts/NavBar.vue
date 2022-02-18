<template>
  <div id="nav">
    <router-link to="/users">Users</router-link> |
    <span v-if="isAuthenticated">
      <button class="logout" @click="$store.dispatch('auth/logout')">
        Logout
      </button>
    </span>
    <span v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/registration">Registration</router-link>
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("auth", ["isAuthenticated"]),
  },
};
</script>

<style>
</style>