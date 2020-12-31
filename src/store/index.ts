import { createStore } from "vuex";
import { IFrame } from "@/types/frame";
import { Vue } from "vue-class-component";

export default createStore({
  state: {
    scoreBoard: [
      {
        frameNr: 0,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 1,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 2,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 3,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 4,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 5,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 6,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 7,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 8,
        score1: null,
        score2: null,
        totalScore: null,
      },
      {
        frameNr: 9,
        score1: null,
        score2: null,
        score3: null,
        totalScore: null,
      },
    ],
  },
  mutations: {
    setFrame(state, frame) {
      state.scoreBoard[frame.frameNr] = frame;
    },
    setScoreBoard(state, scoreBoard) {
      console.log("Setting ScoreBoard:", scoreBoard);
      state.scoreBoard.splice(0, state.scoreBoard.length, ...scoreBoard);
    },
  },
  getters: {
    getFrame: (state) => (frame: number) => {
      return state.scoreBoard[frame];
    },
    getScoreBoard: (state) => (scoreBoard: Array<IFrame>) => {
      return state.scoreBoard;
    },
  },
  actions: {},
  modules: {},
});
