<template>
  <div class="page--center">
    <div v-for="frame in scoreBoard" :key="frame.frameNr">
      <div class="frame">
        <div class="frame__score">
          <ScoreCell :value="frame.score1"></ScoreCell>
          <ScoreCell :value="frame.score2"></ScoreCell>
          <ScoreCell
            v-if="frame.frameNr === 9"
            :value="frame.score3"
          ></ScoreCell>
        </div>
        <div class="frame__total-score">
          <ScoreCell :value="frame.totalScore"></ScoreCell>
        </div>
      </div>
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
    scoreBoard: {
      type: Array,
    },
  },
})
export default class Frame extends Vue {}
</script>

<style lang="scss" scoped>
.page--center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.frame {
  display: flex;
  flex-wrap: wrap;
  width: 5rem;
  height: 5rem;
  margin: 0.2rem;
}

.frame__score {
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
}

.frame__total-score {
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
}
</style>
