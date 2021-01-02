<template>
  <div class="home">
    <h1 class="page-title">Bowl Of Soup</h1>
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
  currentFrameIndex = 0; // Start Frame
  minBowlScore = 0;
  maxBowlScore = BowlingScore.STRIKE;
  amountOfPinsLeft = 10; // Starts out with 10 pins
  bowlScore: number | undefined = undefined;
  created() {
    this.scoreBoard = this.$store.getters.getScoreBoard();
  }
  async calculate() {
    // Send API request
    console.log("Current frame", this.currentFrameIndex);
    if (!this.gameFinished) {
      this.scoreBoard = this.$store.getters.getScoreBoard();
      let currentFrame = this.scoreBoard[this.currentFrameIndex];

      const bowlScore: number = this.bowl();
      let response = await API.renderFrame(currentFrame, bowlScore);
      this.$store.commit("setFrame", response);
      currentFrame = this.scoreBoard[this.currentFrameIndex]; // Current frame was re-rendered and needs to be retrieved again

      this.scoreBoard = this.$store.getters.getScoreBoard();
      response = await API.calculate(this.scoreBoard);
      this.$store.commit("setScoreBoard", response);

      if (currentFrame.isFinished) {
        if (this.isLastFrame(currentFrame)) {
          this.finishGame();
        } else {
          this.nextFrame();
        }
      }
    } else {
      // Game is finished, do nothing.
      console.log("Game is finished...");
    }
  }
  bowl(): number {
    const newBowlScore = this.getBowlScore(this.amountOfPinsLeft);
    this.amountOfPinsLeft -= newBowlScore;
    if (!this.amountOfPinsLeft) this.amountOfPinsLeft = 10;
    return newBowlScore;
  }
  nextFrame() {
    this.currentFrameIndex++;
    this.amountOfPinsLeft = 10;
  }
  finishGame() {
    this.gameFinished = true;
    console.log("GAME FINISHED!");
  }
  isLastFrame(frame: IFrame): boolean {
    return frame.frameNr === this.scoreBoard.length - 1;
  }
  getBowlScore(amountOfPinsLeft: number) {
    return (
      Math.floor(Math.random() * (amountOfPinsLeft + 1)) + this.minBowlScore
    );
  }
}
</script>

<style lang="scss" scoped>
.home-image {
  background-image: none;
  width: 10rem;
  height: 10rem;
  margin: 2rem auto 2rem auto;
}
</style>
