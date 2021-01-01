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
      };
    },
    mutations: {
      setFrame: (state: any, frame: IFrame) => {
        state.scoreBoard[frame.frameNr] = frame;
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

describe("ScoreBoard.vue", () => {
  test("ScoreBoard initially is mounted", () => {
    const wrapper = factory();
    const scoreBoard = wrapper.findComponent(ScoreBoard);
    expect(scoreBoard.exists()).toBe(true);
  });

  test("ScoreBoard initially has props", () => {
    const wrapper = factory();
    const scoreBoard = wrapper.findComponent(ScoreBoard);
    expect(scoreBoard.props().scoreBoard).toBe(store.state.scoreBoard);
  });

  test("ScoreBoard initially has 10 frames", () => {
    const wrapper = factory();
    expect(wrapper.findAllComponents(ScoreFrame).length).toBe(10);
  });
});
