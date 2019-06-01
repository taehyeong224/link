<template>
  <div class="hello">
    <div class="input-url">
      <label>enter url</label>
      <input type="url" v-model="url"/>
      <button @click="make">make short url</button>
    </div>
    <div class="short-url">
        short url: <span>{{shortLink}}</span>
      <button @click="copy">copy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      url: "",
      shortLink: ""
    }
  },
  methods: {
    copy: function () {
      console.log("copy")
    },
    make: function () {
      console.log(this.url)
    }
  }
}
</script>

<style scoped>
.input-url {
  border: 1px solid red;
}
.short-url {
  border: 1px solid blue;
}
</style>
