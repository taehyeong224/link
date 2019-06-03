<template>
  <div class="hello">
    <div id="webView" data-canvas="true" data-show-memo="false" data-show-link="false">
      <div
        data-obj-id="2k345"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 79px; left: 345px; width: 300px; height: 54px;"
      >
        <div
          data-text-content="true"
          style="font-weight: bold; font-size: 36px; text-align: center;"
          class
        >Make short URL</div>
      </div>
      <div
        data-obj-id="m8BBe"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 202px; left: 577px; width: 100px; height: 40px;"
      >
        <div
          data-text-content="true"
          style="font-size: 16px; color: rgb(255, 255, 255); text-align: center; line-height: 2.5em; border-top-left-radius: 4px; border-top-right-radius: 4px; border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; background-color: rgb(52, 152, 219);"
          class
          @click="make"
        >Make</div>
      </div>
      <div
        data-obj-type="group"
        data-obj-id="Ow4yP"
        class
        style="position: absolute; left: 697px; top: 212px; width: 289px; height: 20px;"
      >
        <div
          data-obj-id="dfRoX"
          data-obj-type="element"
          style="position: absolute; top: 0px; left: 0px; width: 20px; height: 20px;"
          class
        >
          <label data-form-control="checkbox" data-min-width="20" data-min-height="20">
            <input type="checkbox" checked="checked" v-model="useHttps">
            <span data-form-decorator="true"></span>
          </label>
        </div>
        <div
          data-obj-id="4GWLx"
          data-obj-type="element"
          data-text-editable="true"
          style="position: absolute; top: 0px; left: 32px; width: 257px; height: 20px;"
          class
        >
          <div data-text-content="true" style="font-size:16px;" class>Use HTTPS</div>
        </div>
      </div>
      <div
        data-obj-id="ZDOaK"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 202px; left: 264px; width: 300px; height: 40px;"
      >
        <input
          type="text"
          data-min-width="60"
          data-min-height="30"
          data-text-content="true"
          value="https://google.com"
          style="color: rgb(94, 94, 94);"
          class="enter-url"
          spellcheck="false"
          v-model="url"
        >
      </div>
      <div
        data-obj-id="jb7AX"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 212px; left: 172px; width: 80px; height: 20px;"
      >
        <div
          data-text-content="true"
          style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(33, 62, 56);"
          class
        >Enter URL</div>
      </div>
      <div
        data-obj-id="f6YFk"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 256px; left: 264px; width: 300px; height: 40px;"
      >
        <input
          type="text"
          data-min-width="60"
          data-min-height="30"
          data-text-content="true"
          value
          style="color: rgb(94, 94, 94);"
          class="short-url"
          id="short"
          v-model="shortLink"
        >
      </div>
      <div
        data-obj-id="2ZejR"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 266px; left: 172px; width: 80px; height: 20px;"
      >
        <div
          data-text-content="true"
          style="border-top-left-radius: 30px; border-top-right-radius: 30px; border-bottom-right-radius: 30px; border-bottom-left-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(26, 188, 156);"
          class
        >Short URL</div>
      </div>
      <div
        data-obj-id="6e11q"
        data-obj-type="icon"
        class
        style="position: absolute; top: 257px; left: 604px; width: 46px; height: 39px;"
      >
        <svg
          @click="copy"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          data-svg-content="true"
          fill="#000000"
        >
          <path
            d="M32 2H8C5.79 2 4 3.79 4 6v28h4V6h24V2zm6 8H16c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h22c2.21 0 4-1.79 4-4V14c0-2.21-1.79-4-4-4zm0 32H16V14h22v28z"
          ></path>
        </svg>
      </div>
      <div
        data-obj-id="3EmTI"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 311px; left: 587px; width: 80px; height: 20px;"
      >
        <div
          data-text-content="true"
          style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(231, 76, 60);"
          class
        >Copy</div>
      </div>
      <div class style="position: absolute; top: 242px; left: 705px; width: 64px; height: 64px;">
        <i class="fa fa-arrow-circle-right fa-3x" aria-hidden="true" @click="go" style="margin: 20px auto auto 10px;"></i>
      </div>
      <div
        data-obj-id="RNMmR"
        data-obj-type="element"
        data-text-editable="true"
        class
        style="position: absolute; top: 311px; left: 697px; width: 80px; height: 20px;"
      >
        <div
          data-text-content="true"
          style="border-radius: 30px; text-align: center; line-height: 20px; color: rgb(255, 255, 255); font-size: 12px; box-shadow: none; background-color: rgb(0, 0, 0);"
          class
        >Go</div>
      </div>
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
      shortLink: "",
      useHttps: true,
      msg: ""
    };
  },
  created: function() {
    console.log(process.env.NODE_ENV);
  },
  methods: {
    copy: function() {
      console.log("copy");
      const t = document.getElementById("short");
      console.log("t : ", t);
      t.value = this.shortLink;
      t.select();
      document.execCommand("copy");
      this.msg = "complete copy";
    },
    make: function() {
      const baseHOST =
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://l.codingall.me";
      console.log(this.url);
      if (!this.checkURL()) {
        alert("URL INVALID");
        return false;
      }
      this.useHttps ? this.addHttpsToFromURL() : this.addHttpToFromURL();
      const hash = shortid.generate();
      this.shortLink = `${baseHOST}/${hash}`;
      this.$store.dispatch(MAKE_URL, {
        key: hash,
        from: this.url,
        to: this.shortLink
      });
    },
    addHttpsToFromURL: function() {
      if (this.url.startsWith("http://")) {
        const split = this.url.split("http://");
        this.url = `https://${split[1]}`;
      }

      if (!this.url.startsWith("https://")) {
        this.url = `https://${this.url}`;
      }
    },
    addHttpToFromURL: function() {
      if (this.url.startsWith("https://")) {
        const split = this.url.split("https://");
        this.url = `http://${split[1]}`;
      }

      if (!this.url.startsWith("http://")) {
        this.url = `http://${this.url}`;
      }
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
.enter-url {
  width: 300px;
  height: 40px;
}
.short-url {
  width: 300px;
  height: 40px;
}
</style>
