import { createStore } from "vuex";
import { IFrame } from "@/interfaces/frame.interface";
import { IState } from "@/interfaces/state.interface";

import { Vue } from "vue-class-component";

export default createStore<IState>({
  state: {
    scoreBoard: [
      {
        frameNr: 0,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 1,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 2,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 3,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 4,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 5,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 6,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 7,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 8,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        totalScore: 0,
        isFinished: false,
      },
      {
        frameNr: 9,
        score1: null,
        score1Render: "",
        score2: null,
        score2Render: "",
        score3: null,
        score3Render: "",
        totalScore: 0,
        isFinished: false,
      },
    ],
  },
  mutations: {
    setFrame(state, frame) {
      state.scoreBoard[frame.frameNr] = frame;
    },
    setScoreBoard(state, scoreBoard) {
      console.log("Setting ScoreBoardssss:", scoreBoard);
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
