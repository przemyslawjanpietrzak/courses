<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ MSG }}</h1>
    <h1>{{ localMsg }}</h1>
    <h1>{{ isUserLoading  }}</h1>

    <button @click="onClick()">click</button>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

const fetch = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('42')
  }, 3000)
});


export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
      // validator(msg ) {
      //   return  msg.startsWith("/")
      // }
    },
  },
  data() {
    return {
      localMsg: 'local',
    }
  },
  computed: {
    ...mapGetters('user', ['isUserLoading']),
    MSG() {
      return this.msg.toUpperCase() + this.localMsg.toUpperCase();
    }
  },
  async mounted() {
    const data = await fetch();

    await this.fetchUserData();
    console.log('fetched');
    this.localMsg = data;


    // await this.$router.push({ path: '/', query: { plan: 'private' }});
  },
  watch: {
    localMsg() {
      console.log('msg');
    },
    '$route.query'(q) {
      console.log({q});
    }
  },
  methods: {
    ...mapActions('user', ['fetchUserData']),
    onClick() {
      this.localMsg += '!';
      this.$emit('clik', 42);
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
