<template>
  <div class="score-cell score-cell--center-content">{{ value }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScoreCell",
  props: {
    value: Number,
  },
});
</script>

<style lang="scss" scoped>
.score-cell {
  width: 50%;
  height: 100%;
  border: 1px solid black;
}

.score-cell--center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
