<template>
  <div class="has-text-centered box">
    <h1 class="title">Congratulations, you won!</h1>
    <h1 class="title ">Your reward: {{ cash }}</h1>
    <hr>
    <div class="columns">
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ path: '/play' }">Restart</router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ path: '/' }">Home Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        cash: 'cash'
      })
    }
  }
</script>
