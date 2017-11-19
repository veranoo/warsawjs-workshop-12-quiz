<template>
  <div class="has-text-centered box">
    <h1 class="title">Congratulations, you won!</h1>
    <h1 class="title ">Your reward: ~~reward~~</h1>
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
