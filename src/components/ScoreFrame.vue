<template>
  <div>
    <div class="frame__score">
      <ScoreCell :value="frame.score1"></ScoreCell>
      <ScoreCell :value="frame.score2"></ScoreCell>
      <ScoreCell v-if="frame.frameNr === 9" :value="frame.score3"></ScoreCell>
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
  name: "Frame",
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
</style>
