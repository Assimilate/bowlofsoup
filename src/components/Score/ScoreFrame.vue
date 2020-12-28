<template>
  <div class="page--center">
    <div v-for="frame in frames" :key="frame.nr" class="round">
      <ScoreCell :value="frame.score1"></ScoreCell>
      <ScoreCell :value="frame.score2"></ScoreCell>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreCell from "../Score/ScoreCell.vue";

export default defineComponent({
  name: "Round",
  components: {
    ScoreCell,
  },
  props: {
    frames: {
      type: Array,
    },
  },
});
</script>

<style lang="scss" scoped>
.page--center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.round {
  display: flex;
  width: 5rem;
  height: 5rem;
  margin: 0.2rem;
}
</style>
