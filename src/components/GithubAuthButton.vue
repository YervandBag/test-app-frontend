<template>
  <button class="btn btn-primary mx-2" type="button" @click="openWindow">
    Github
  </button>
</template>

<script>
import { GIHUB_OAUTH_APP_ID, GIHUB_OAUTH_REDIRECT_URL } from "../config";
import qs from "qs";

export default {
  name: "GithubAuthButton",
  data: () => ({
    windowRef: null,
  }),
  methods: {
    async openWindow() {
      const w = 320,
        h = 320;
      const left = screen.width / 2 - w / 2;
      const top = screen.height / 2 - h / 2;
      const features = `popup,left=${left},top=${top},width=${w},height=${h}`;
      const params = {
        client_id: GIHUB_OAUTH_APP_ID,
        redirect_uri: GIHUB_OAUTH_REDIRECT_URL,
        scope: "user",
      };
      this.windowRef = await window.open(
        `https://github.com/login/oauth/authorize?${qs.stringify(params)}`,
        "Github SSO",
        features
      );

      this.windowRef.addEventListener("load", this.parseGithubQuery, true);
      this.windowRef.addEventListener(
        "beforeunload ",
        this.parseGithubQuery,
        true
      );
    },

    closeWindow() {
      if (this.windowRef) {
        this.windowRef.close();
      }
    },

    parseGithubQuery({ currentTarget }) {
      const query = currentTarget.location.search.substring(1);
      const parsedQuery = qs.parse(query);

      console.log({ parsedQuery });
      this.closeWindow();

      if (parsedQuery.error) {
        this.$emit("onError", parsedQuery);
        return;
      }

      const { code } = parsedQuery;
      this.$emit("onSuccess", code);
    },
  },
};
</script>

<style>
</style>