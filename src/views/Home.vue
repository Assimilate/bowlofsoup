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

@Options({
  components: {
    ScoreBoard,
    ShootBall,
  },
})
export default class Home extends Vue {
  scoreBoard: Array<IFrame> = [];
  created() {
    this.scoreBoard = this.$store.getters.getScoreBoard();
  }
  calculate() {
    const frame = {
      frameNr: 0,
      score1: 1,
      score2: 2,
      totalScore: 3,
    };
    this.$store.commit("setFrame", frame);
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
