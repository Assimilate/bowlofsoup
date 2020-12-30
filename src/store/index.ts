import { createStore } from "vuex";
import { IFrame } from "@/types/frame";

export default createStore({
  state: {
    scoreBoard: [
      {
        frameNr: 0,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 1,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 2,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 3,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 4,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 5,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 6,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 7,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 8,
        score1: undefined,
        score2: undefined,
        totalScore: undefined,
      },
      {
        frameNr: 9,
        score1: undefined,
        score2: undefined,
        score3: undefined,
        totalScore: undefined,
      },
    ],
  },
  mutations: {
    setFrame(state, frame) {
      state.scoreBoard[frame.frameNr] = frame;
    },
    setScoreBoard(state, scoreBoard) {
      state.scoreBoard = scoreBoard;
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
