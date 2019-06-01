<template>
  <div class="hash">{{msg}}</div>
</template>

<script>
import {GET_FROM_URL} from "../config/StoreConfig"
export default {
  name: "Hash",
  data: function () {
      return {
          msg: "moving ..."
      }
  },
  created: async function() {
      const getURL = await this.$store.dispatch(GET_FROM_URL, {key: this.$route.params.hash});
      if (!getURL) {
          this.msg = "error"
          return false;
      }
      window.location.replace(getURL);
  }
};
</script>

<style scoped>
</style>
