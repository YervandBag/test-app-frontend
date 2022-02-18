<template>
  <div>
    <div>
      <b-alert v-if="errorMsg">
        {{errorMsg}}
      </b-alert>
    </div>
    <div v-if="isLoading">
      <b-spinner></b-spinner>
    </div>
    <div v-else>
      <h3 class="mt-3">Users</h3>
      <div v-for="user in users" :key="user.id">
        <span>{{ user.firstname }} {{user.lastname}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Users",

  computed: {
    ...mapGetters("user", ["users", "isLoading", "errorMsg"]),
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    fetchUsers() {
      this.$store.dispatch("user/loadUsers");
    },
  },
};
</script>
