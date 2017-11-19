import shuffle from 'lodash/shuffle'
import axios from 'axios'
import { DIFFICULTY_LEVELS } from './const'

const QUESTION_API_ENDPOINT = 'src/common/questions.json'

const mapApiQuestionToAppQuestion = q => {
  const answers = shuffle([
    q.correct_answer,
    ...q.incorrect_answers
  ])
  return {
    text: q.question,
    category: q.category,
    correctAnswer: answers.indexOf(q.correct_answer),
    difficulty: q.difficulty,
    answers
  }
}

export const getQuestions = (amount, difficulty = DIFFICULTY_LEVELS.MEDIUM) =>
  axios.get(QUESTION_API_ENDPOINT)
    .then(response => response.data.results
      .map(mapApiQuestionToAppQuestion))
