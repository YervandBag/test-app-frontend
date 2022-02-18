<template>
  <div>
    <div v-if="!isReady">Loading...</div>
    <div v-else>
      <nav-bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from './components/layouts/NavBar.vue';
import StorageService from "./services/storage.service";

export default {
  components: { NavBar },
  computed: {
    isReady() {
      return !StorageService.getToken() ? true : this.isLoaded === true;
    },
    ...mapGetters("auth", ["isAuthenticated", "isLoaded"]),
  },

  mounted() {
    if (StorageService.getToken()) {
      this.$store.dispatch("auth/loadMe");
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logout {
  background: transparent;
  border: none;
  color: #42b983;
}
</style>
