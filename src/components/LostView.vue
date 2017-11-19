<template>
  <div class="has-text-centered box">
    <h1 class="title">Incorrect answer, you lost!</h1>
    <h2 class="subtitle">
      Correct answer: ~~answer~~
    </h2>
    <hr>
    <div class="columns">
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ path: '/play' }">Try again</router-link>
      </div>
      <div class="column">
        <router-link class="button is-fullwidth" :to="{ path: '/' }">Main menu</router-link>
      </div>
    </div>
  </div>
</template>

