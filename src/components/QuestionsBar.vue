<template>
  <div class="c-question-list">
    <div class="columns is-multiline">
      <div class="column is-12" v-for="question in questions.slice().reverse()">
        <div v-bind:class="{ 'is-success': question.isAnswered }" class="c-question-list__item button is-fullwidth">
          <span>{{ question.reward | currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['questions'],
  }
</script>

<style lang="scss">
  .c-question-list {
    &__item {
      color: hsl(48,  100%, 67%);
    }
  }
</style>
