<template>
  <div class="page--center">
    <div v-for="round in rounds" :key="round.nr" class="round">
      <Score :value="round.score1"></Score>
      <Score :value="round.score2"></Score>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Score from "./Score.vue";

export default defineComponent({
  name: "Round",
  components: {
    Score,
  },
  props: {
    rounds: {
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
