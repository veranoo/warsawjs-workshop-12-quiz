import Vue from 'vue';
import VueX from 'vuex';

import { getQuestions } from './common/api';
import { REWARDS, STATUSES } from './common/const';

Vue.use(VueX);

const state = {
  currentRound: 0,
  questions: [],
  cash: 0,
  status: STATUSES.NOT_STARTED
};

const getters = {
  cash(state) {
    return state.cash
  },
  status(state) {
    return state.status
  },
  currentRound(state) {
    return state.currentRound
  },
  currentQuestion(state) {
    const currentRound = state.currentRound;
    const questions = getters.questions(state);
    return questions[currentRound]
  },
  questions(state) {
    return state.questions.map((item, index) => {
      return {
        ...item,
        reward: REWARDS[index],
        isAnswered: index < state.currentRound
      }
    })
  }
}

const actions = {
  initGame({ commit }) {
    getQuestions(10)
      .then(questions => {
        commit('setQuestions', questions)
      })
  }
}

const mutations = {
  setQuestions(state, questions) {
    state.questions = questions;
  },
  resetCurrentRound(state) {
    state.currentRound = 0;
  },
  answerQuestion(state, answer) {
    const currentQuestion = getters.currentQuestion(state);
    if (currentQuestion.correctAnswer === answer) {
      state.currentRound++;
      state.cash = currentQuestion.reward;
      if (state.currentRound === state.questions.length) {
        state.status = STATUSES.WON
      }
    } else {
      state.status = STATUSES.LOST;
    }
  }
}

export default new VueX.Store({
  state,
  getters,
  actions,
  mutations
})
