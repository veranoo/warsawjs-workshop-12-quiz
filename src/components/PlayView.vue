<template>
  <div class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <div class="has-text-centered">
          <h1 class="title">Currently won: <strong>~~amount~~</strong></h1>
          <h2 class="subtitle">Round ~~current~~ of ~~max~~</h2>
        </div>
      </div>
    </div>
    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile box">
          <game v-if="currentQuestion" :question="currentQuestion"></game>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <questions-bar :questions="prepareQuestion"></questions-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getQuestions } from '../common/api'
  import { REWARDS } from '../common/const';
  import QuestionsBar from './QuestionsBar.vue';
  import Game from './Game.vue';

  export default {
    data: () => ({
      questions: [],
      currentQuestionIndex: 0
    }),
    computed: {
      prepareQuestion() {
        return this.questions.map((item, index) => ({
          ...item,
          reward: REWARDS[index]
        }))
      },
      currentQuestion() {
        return this.prepareQuestion[this.currentQuestionIndex];
      }
    },
    created() {
      getQuestions()
        .then((questions) => {
          this.questions = questions;
        })

      this.$on('vaildAnswer', (event) => {
          this.currentQuestionIndex++;
      })
    },
    components: {
      QuestionsBar,
      Game
    }
  }
</script>

<style lang="scss">

  // styles for animations

  .flip-enter-active, .flip-leave-active {
    transition: all 0.5s linear;
  }

  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
