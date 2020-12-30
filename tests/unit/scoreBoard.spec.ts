import { mount } from "@vue/test-utils";
import { createStore, MutationTree, Store } from "vuex";
import ScoreBoard from "@/components/Score/ScoreBoard.vue";
import { IFrame } from "@/types/frame";

describe("ScoreBoard.vue", () => {
  let store: any;
  const mutations: MutationTree<any> = {
    setFrame: (state: any, frame: IFrame) => {
      state.scoreBoard[frame.frameNr] = frame;
    },
  };

  beforeEach(() => {
    store = createStore({
      mutations,
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
            totalScore: undefined,
          },
        ],
      },
    });
  });

  test("Mock store initialized", () => {
    const wrapper = mount(ScoreBoard, {
      global: { plugins: [store] },
    });
    expect(wrapper.vm.scoreBoard.length).toBe(10);
  });

  test("Test frame 0 set with values", () => {
    const wrapper = mount(ScoreBoard, {
      global: { plugins: [store] },
    });
    let frameToSet = {
      frameNr: 0,
      score1: 5,
      score2: 4,
      totalScore: 9,
    };
    store.commit("setFrame", frameToSet);
    expect(wrapper.vm.scoreBoard[0].score1).toBe(5);
  });
});
