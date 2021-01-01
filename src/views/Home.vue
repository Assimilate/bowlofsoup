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
import { BowlingScore } from "@/utils/bowling.enum";
import ShootBall from "@/components/ShootBall.vue";
import { IFrame } from "@/interfaces/frame.interface";
import API from "@/API/calculate";

@Options({
  components: {
    ScoreBoard,
    ShootBall,
  },
})
export default class Home extends Vue {
  scoreBoard: Array<IFrame> = [];
  gameFinished = false;
  currentFrame = 0; // Start Frame
  minBowlScore = 0;
  maxBowlScore = 10;
  bowlScore: number | undefined = undefined;
  created() {
    this.scoreBoard = this.$store.getters.getScoreBoard();
  }
  async calculate() {
    // Send API request
    console.log("Current frame", this.currentFrame);
    if (!this.gameFinished) {
      let currentScoreBoard: Array<IFrame> = this.$store.getters.getScoreBoard();
      const bowlScore: number = this.getBowlScore();
      let response = await API.calculateFrame(
        currentScoreBoard[this.currentFrame],
        bowlScore
      );
      this.$store.commit("setFrame", response);

      currentScoreBoard = this.$store.getters.getScoreBoard();
      response = await API.calculate(currentScoreBoard);
      this.$store.commit("setScoreBoard", response);
      // console.log("Current Score Board", response);

      if (this.frameFinished(this.currentFrame)) {
        if (this.isLastFrame(this.currentFrame)) {
          this.finishGame();
        } else {
          this.currentFrame++; // Second score was bowled, next round its a new frame.
        }
      }
    } else {
      // Game is finished, do nothing.
    }
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
  finishGame() {
    this.gameFinished = true;
    console.log("GAME FINISHED!");
  }
  frameFinished(currentFrame: number) {
    const frame = this.scoreBoard[currentFrame];
    let isFinished = false;
    if (
      this.isLastFrame(currentFrame) &&
      frame.score1 === BowlingScore.STRIKE
    ) {
      if (
        frame.score1 !== null &&
        frame.score2 !== null &&
        frame.score3 !== null
      ) {
        isFinished = true;
      }
    } else {
      if (frame.score1 !== null && frame.score2 !== null) {
        isFinished = true;
      }
    }
    return isFinished;
  }
  isLastFrame(currentFrame: number): boolean {
    return currentFrame === this.scoreBoard.length - 1;
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
