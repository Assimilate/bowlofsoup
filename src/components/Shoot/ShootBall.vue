<template>
  <div class="button-area">
    <button class="button-area__button" @click="shoot">
      {{ showScore() }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const minimumScore = 0;
const maximumScore = 10;

export default defineComponent({
  name: "ShootBall",
  data() {
    return {
      score: undefined as unknown,
      whichFrame: 0 as number,
    };
  },
  methods: {
    shoot() {
      const score = this.getScore();
      let frame = this.getFrame();
      frame = this.setScoreInFrame(frame, score);
      this.setFrame(frame);
      this.score = score;
    },
    getScore() {
      const score = Math.floor(Math.random() * maximumScore) + minimumScore;
      return score;
    },
    getFrame() {
      return this.$store.getters.getFrame(this.whichFrame);
    },
    setFrame(frame: any) {
      this.$store.commit("setFrame", frame);
    },
    setScoreInFrame(frame: any, score: number) {
      if (!frame.score1) {
        frame.score1 = score;
      } else {
        frame.score2 = score;
        this.whichFrame++;
      }
      return frame;
    },
    showScore() {
      if (this.score !== undefined) {
        return this.score;
      } else {
        return "Shoot";
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.button-area {
  margin: 2rem auto;
  width: 10rem;
  height: 10rem;
}

.button-area__button {
  width: 50%;
  height: 50%;
  border-radius: 100rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1rem;
  outline: none;
}
</style>
