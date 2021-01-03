<template>
  <div v-if="!gameFinished" class="home">
    <h1 class="page-title">Bowl Of Soup</h1>
    <img
      class="home-image"
      src="https://www.clipartmax.com/png/small/102-1025011_soup-bowl-idle-soup-can-bfdi.png"
      alt="Soup Bowl Idle - Soup Can Bfdi @clipartmax.com"
    />
    <ScoreBoard v-if="scoreBoard" :scoreBoard="scoreBoard"> </ScoreBoard>
    <ShootBall v-on:shoot="calculate"> </ShootBall>
  </div>
  <transition name="bounce">
    <div v-if="gameFinished" class="game-finished">
      <h1 class="game-finished__text">
        Final score: {{ scoreBoard[9].totalScore }}
      </h1>
      <a @click="playAgain" class="game-finished__button">Play again</a>
    </div>
  </transition>
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
    this.amountOfPinsLeft = this.$store.getters.getAmountOfPinsLeft();
    this.currentFrameIndex = this.$store.getters.getCurrentFrameIndex();
    this.gameFinished = this.$store.getters.getGameFinished();
  }
  async calculate() {
    // Send API request
    if (!this.gameFinished) {
      this.scoreBoard = this.$store.getters.getScoreBoard();
      let currentFrame = this.scoreBoard[this.currentFrameIndex];

      const bowlScore: number = this.bowl();
      let response = await API.renderFrame(currentFrame, bowlScore);
      this.$store.commit("setFrame", response);

      this.scoreBoard = this.$store.getters.getScoreBoard();
      response = await API.calculate(this.scoreBoard);
      this.$store.commit("setScoreBoard", response);

      currentFrame = this.scoreBoard[this.currentFrameIndex]; // Current frame was re-rendered and needs to be retrieved again
      if (currentFrame.isFinished) {
        if (this.isLastFrame(currentFrame)) {
          this.finishGame();
        } else {
          this.nextFrame();
          this.saveState();
        }
      }
    } else {
      // Game is finished, do nothing.
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
    this.amountOfPinsLeft = 10; // New frame/round, restock the pins
  }
  finishGame() {
    setTimeout(() => {
      this.gameFinished = true;
    }, 1000);
  }
  isLastFrame(frame: IFrame): boolean {
    return frame.frameNr === this.scoreBoard.length - 1;
  }
  getBowlScore(amountOfPinsLeft: number) {
    return (
      Math.floor(Math.random() * (amountOfPinsLeft + 1)) + this.minBowlScore
    );
  }
  playAgain() {
    this.currentFrameIndex = 0;
    this.amountOfPinsLeft = 10;
    this.$store.commit("reset");
    this.gameFinished = false;
    this.saveState();
  }
  saveState() {
    this.$store.commit("setAmountOfPinsLeft", this.amountOfPinsLeft);
    this.$store.commit("setGameFinished", this.gameFinished);
    this.$store.commit("setCurrentFrameIndex", this.currentFrameIndex);
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

.game-finished {
  top: calc(50% - 25%);
  left: calc(50% - 25%);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 50%;
  height: 50%;
  margin: 0 auto;
}

.game-finished__text {
  display: block;
  width: 100%;
  margin: 1rem;
}

.game-finished__button {
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  width: 50%;
  height: 2rem;
  border-radius: 100rem;
  box-shadow: 0.05rem 0.1rem 0.1rem 0.1rem rgb(155, 155, 155);
  cursor: pointer;
  margin: 1rem;
}

// Animations

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
