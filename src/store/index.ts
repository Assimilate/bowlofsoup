import { createStore } from "vuex";

export default createStore({
  state: {
    scoreBoard: [
      {
        frameNr: 0,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 1,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 2,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 3,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 4,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 5,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 6,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 7,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 8,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
      {
        frameNr: 9,
        score1: undefined as unknown,
        score2: undefined as unknown,
        totalScore: undefined as unknown,
      },
    ],
  },
  mutations: {
    setFrame(state, frame) {
      state.scoreBoard[frame.frameNr] = frame;
    },
  },
  getters: {
    getFrame: (state) => (frame: number) => {
      return state.scoreBoard[frame];
    },
  },
  actions: {},
  modules: {},
});
