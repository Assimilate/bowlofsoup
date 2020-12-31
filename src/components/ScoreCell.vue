<template>
  <div class="score-cell score-cell--center-content">
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    value: [Number, String],
  },
})
export default class ScoreCell extends Vue {}
</script>

<style lang="scss" scoped>
.score-cell {
  width: 100%;
  height: 100%;
  border: 1px solid black;
}

.score-cell--center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
