<template>
  <div class="hello">
    <div class="input-url">
      <label>enter url</label>
      <input type="url" v-model="url">
      <button @click="make">make short url</button>
    </div>
    <div class="short-url">
      short url:
      <span>{{shortLink}}</span>
      <button @click="copy">copy</button>
      <button @click="go">go</button>
    </div>
  </div>
</template>

<script>
import { MAKE_URL } from "../config/StoreConfig";
import * as shortid from "shortid";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      url: "",
      shortLink: ""
    };
  },
  created: function () {
    console.log(process.env.NODE_ENV)
  },
  methods: {
    copy: function() {
      console.log("copy");
    },
    make: function() {
      const baseHOST = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://l.codingall.me"
      console.log(this.url);
      if (!this.checkURL()) {
        alert("URL INVALID");
        return false;
      }
      const hash = shortid.generate();
      this.shortLink = `${baseHOST}/${hash}`;
      this.$store.dispatch(MAKE_URL, { key: hash, from: this.url, to: this.shortLink});
    },
    checkURL: function() {
      const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);
      return this.url.match(regex);
    },
    go: function() {
      window.location.replace(this.shortLink);
    }
  }
};
</script>

<style scoped>
.input-url {
  border: 1px solid red;
}
.short-url {
  border: 1px solid blue;
}
</style>
