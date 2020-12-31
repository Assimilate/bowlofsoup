<template>
  <div class="home">
    <img
      class="home-image"
      src="https://www.clipartmax.com/png/small/102-1025011_soup-bowl-idle-soup-can-bfdi.png"
      alt="Soup Bowl Idle - Soup Can Bfdi @clipartmax.com"
    />
    <ScoreBoard v-if="scoreBoard.length > 0" :scoreBoard="scoreBoard">
    </ScoreBoard>
    <ShootBall v-on:shoot="calculate"> </ShootBall>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScoreBoard from "@/components/ScoreBoard.vue"; // @ is an alias to /src
import ShootBall from "@/components/ShootBall.vue";
import { IFrame } from "@/types/frame";
import API from "@/API/calculate";

@Options({
  components: {
    ScoreBoard,
    ShootBall,
  },
})
export default class Home extends Vue {
  scoreBoard: Array<IFrame> = [];
  currentFrame = 0; // Start Frame
  minBowlScore = 0;
  maxBowlScore = 10;
  bowlScore: number | undefined = undefined;
  created() {
    this.scoreBoard = this.$store.getters.getScoreBoard();
  }
  async calculate() {
    // Send API request
    const currentScoreBoard: Array<IFrame> = this.$store.getters.getScoreBoard();
    const bowlScore: number = this.getBowlScore();
    const response = await API.calculateFrame(
      currentScoreBoard[this.currentFrame],
      bowlScore
    );
    if (!this.isLastFrame() && this.frameFinished(this.currentFrame)) {
      this.currentFrame++; // Second score was bowled, next round its a new frame.
    }
    this.$store.commit("setFrame", response);
  }
  getBowlScore(): number {
    let newBowlScore = this.getRandomNr();
    const previousBowlScore = this.getPreviousBowlScore();
    if (!previousBowlScore) {
      return newBowlScore;
    } else {
      do {
        newBowlScore = this.getRandomNr();
      } while (
        newBowlScore > this.pinsLeft(this.maxBowlScore, previousBowlScore)
      );
      return newBowlScore;
    }
  }
  frameFinished(currentFrame: number) {
    const frame = this.scoreBoard[currentFrame];
    return frame.score1 !== null && frame.score2 !== null;
  }
  isLastFrame() {
    return this.currentFrame === this.scoreBoard.length;
  }
  pinsLeft(maxBowlScore: number, previousBowlScore: number): number {
    return maxBowlScore - previousBowlScore;
  }
  getPreviousBowlScore(): number | undefined {
    const frame = this.scoreBoard[this.currentFrame];
    if (frame) {
      if (frame.score1) return frame.score1 as number;
      else return undefined;
    }
  }
  getRandomNr() {
    return (
      Math.floor(Math.random() * this.maxBowlScore + 1) + this.minBowlScore
    );
  }
}
</script>

<style lang="scss" scoped>
.home-image {
  background-image: none;
  width: 10rem;
  height: 10rem;
  margin: 5rem;
}
</style>
