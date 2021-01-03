import { mount } from "@vue/test-utils";
import { createStore, MutationTree } from "vuex";
import Home from "@/views/Home.vue";
import ScoreBoard from "@/components/ScoreBoard.vue";
import ScoreFrame from "@/components/ScoreFrame.vue";
import { IFrame } from "@/interfaces/frame.interface";
const createVuexStore = () => {
  return createStore({
    state() {
      return {
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
        gameFinished: false,
        amountOfPinsLeft: 10,
        currentFrameIndex: 0,
      };
    },
    mutations: {
      setFrame: (state: any, frame: IFrame) => {
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
  });
};
const store = createVuexStore();
function factory() {
  return mount(Home, {
    global: {
      plugins: [store],
    },
  });
}

describe("Home.vue", () => {
  test("When a bowling score is retrieved it should be less than or equal to the amount of pins left", () => {
    const wrapper = factory();

    let amountOfPinsLeft = 10;
    wrapper.vm.amountOfPinsLeft = amountOfPinsLeft;
    let bowlScore = wrapper.vm.getBowlScore(amountOfPinsLeft);
    expect(bowlScore).toBeLessThanOrEqual(10);

    amountOfPinsLeft = 5;
    wrapper.vm.amountOfPinsLeft = amountOfPinsLeft;
    bowlScore = wrapper.vm.getBowlScore(amountOfPinsLeft);
    expect(bowlScore).toBeLessThanOrEqual(5);
  });

  test("After a bowling move is made there should be 10 or less pins left if its the first try", () => {
    const wrapper = factory();
    // New round initially
    expect(wrapper.vm.amountOfPinsLeft).toBe(10);
    wrapper.vm.bowl();
    expect(wrapper.vm.amountOfPinsLeft).toBeLessThanOrEqual(10);
  });

  test("When it is a new frame/round the amount of pins left should be 10 and the current frame index should be one greater than before if not last frame", () => {
    const wrapper = factory();

    let currentFrameIndex = 2;
    let nextFrameIndex = 3;
    wrapper.vm.currentFrameIndex = currentFrameIndex;

    let amountOfPinsLeft = 5;
    wrapper.vm.amountOfPinsLeft = amountOfPinsLeft;

    wrapper.vm.nextFrame();
    expect(wrapper.vm.amountOfPinsLeft).toBe(10);
    expect(wrapper.vm.currentFrameIndex).toBe(currentFrameIndex + 1);
  });
});

describe("ScoreBoard.vue", () => {
  test("ScoreBoard initially is mounted", () => {
    const wrapper = factory();
    const scoreBoard = wrapper.findComponent(ScoreBoard);
    expect(scoreBoard.exists()).toBe(true);
  });

  test("ScoreBoard initially has a score board as a property", () => {
    const wrapper = factory();
    const scoreBoard = wrapper.findComponent(ScoreBoard);
    expect(scoreBoard.props().scoreBoard).toBe(store.state.scoreBoard);
  });

  test("ScoreBoard initially has 10 frames", () => {
    const wrapper = factory();
    expect(wrapper.findAllComponents(ScoreFrame).length).toBe(10);
  });
});
