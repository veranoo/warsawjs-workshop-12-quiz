<template>
  <div class="o-vertical-fill tile is-vertical is-ancestor">
    <div class="o-vertical-fill__item o-vertical-fill__item--fixed tile is-parent">
      <div class="is-child tile box">
        <div class="has-text-centered">
          <h1 class="title">Currently won: <strong>{{ cash | currency }}</strong></h1>
          <h2 class="subtitle">Round {{ currentRound + 1 }} of {{ questions.length }}</h2>
        </div>
      </div>
    </div>
    <div class="o-vertical-fill__item tile">
      <div class="tile is-parent is-9">
        <div class="is-child tile">
          <transition name="flip" mode="out-in">
            <game
              @submitted="answerQuestion($event)"
              v-if="currentQuestion"
              :question="currentQuestion"
              class="box"
              :key="currentRound"
            >
            </game>
          </transition>
        </div>
      </div>
      <div class="tile is-parent">
        <div class="is-child tile box">
          <questions-bar :questions="questions"></questions-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { REWARDS, STATUSES } from '../common/const';
  import QuestionsBar from './QuestionsBar.vue';
  import Game from './Game.vue';
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        cash: 'cash',
        status: 'status',
        currentRound: 'currentRound',
        questions: 'questions',
        currentQuestion: 'currentQuestion'
      })
    },
    methods: {
      answerQuestion(index) {
        this.$store.commit('answerQuestion', index);
        if (this.questions.length === this.currentRound) {
          this.$router.push({ name: 'win' })
        }
      }
    },
    created() {
      this.$store.commit('resetCurrentRound');
      this.$store.dispatch('initGame');
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
    transition: all 0.2s linear;
  }

  .flip-enter, .flip-leave-to {
    transform: rotateY(90deg) scale(0.5, 1);
  }
</style>
