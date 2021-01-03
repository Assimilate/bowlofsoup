<template>
  <div class="score-board score-board--center">
    <ScoreFrame
      v-for="frame in scoreBoard"
      :key="frame.frameNr"
      :frame="frame"
      class="frame"
    ></ScoreFrame>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScoreFrame from "@/components/ScoreFrame.vue";
import ExtraScoreFrame from "@/components/ScoreFrame.vue";
import { IFrame } from "@/interfaces/frame.interface";

@Options({
  components: {
    ScoreFrame,
    ExtraScoreFrame,
  },
  props: {
    scoreBoard: {
      type: Array,
    },
  },
})
export default class ScoreBoard extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.score-board--center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.score-board {
  display: flex;
  flex-wrap: wrap;
}
.frame {
  width: 18%;
  height: 5rem;
  margin: 1rem 1% 1rem 1%;
}
</style>
