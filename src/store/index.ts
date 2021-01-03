import { createStore } from "vuex";
import { IFrame } from "@/interfaces/frame.interface";
import { IState } from "@/interfaces/state.interface";

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
    gameFinished: false,
    amountOfPinsLeft: 10,
    currentFrameIndex: 0,
  },
  mutations: {
    setFrame(state, frame) {
      state.scoreBoard[frame.frameNr] = frame;
    },
    setScoreBoard(state, scoreBoard) {
      state.scoreBoard.splice(0, state.scoreBoard.length, ...scoreBoard);
    },
    reset(state) {
      for (const frame of state.scoreBoard) {
        frame.score1 = null;
        frame.score1Render = "";
        frame.score2 = null;
        frame.score2Render = "";
        frame.totalScore = 0;
        frame.isFinished = false;
        if (frame.frameNr === state.scoreBoard.length - 1) {
          frame.score3 = null;
          frame.score3Render = "";
        }
      }
    },
    setGameFinished(state, gameFinished) {
      state.gameFinished = gameFinished;
    },
    setCurrentFrameIndex(state, currentFrameIndex) {
      state.currentFrameIndex = currentFrameIndex;
    },
    setAmountOfPinsLeft(state, amountOfPinsLeft) {
      state.amountOfPinsLeft = amountOfPinsLeft;
    },
  },
  getters: {
    getFrame: (state) => (frame: number) => {
      return state.scoreBoard[frame];
    },
    getScoreBoard: (state) => (scoreBoard: Array<IFrame>) => {
      return state.scoreBoard;
    },
    getGameFinished: (state) => (gameFinished: boolean) => {
      return state.gameFinished;
    },
    getCurrentFrameIndex: (state) => (currentFrameIndex: number) => {
      return state.currentFrameIndex;
    },
    getAmountOfPinsLeft: (state) => (amountOfPinsLeft: number) => {
      return state.amountOfPinsLeft;
    },
  },
  actions: {},
  modules: {},
});
