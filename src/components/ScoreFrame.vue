<template>
  <div>
    <div class="frame__title">{{ frame.frameNr + 1 }}</div>
    <div class="frame__score">
      <ScoreCell :value="frame.score1Render"></ScoreCell>
      <ScoreCell :value="frame.score2Render"></ScoreCell>
      <ScoreCell
        v-if="frame.frameNr === 9"
        :value="frame.score3Render"
      ></ScoreCell>
    </div>
    <div class="frame__total-score">
      <ScoreCell :value="frame.totalScore"></ScoreCell>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScoreCell from "@/components/ScoreCell.vue";
@Options({
  components: {
    ScoreCell,
  },
  props: {
    frame: {
      type: Object,
    },
  },
})
export default class Frame extends Vue {}
</script>

<style lang="scss" scoped>
.frame__score {
  display: flex;
  height: 50%;
  width: 100%;
}
.frame__total-score {
  display: flex;
  height: 50%;
  width: 100%;
}

.frame__title {
  display: flex;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  background-color: #ccc;
}
</style>
