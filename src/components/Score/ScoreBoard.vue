<template>
  <div>
    <ScoreFrame v-if="frames" :frames="frames"></ScoreFrame>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreFrame from "../Score/ScoreFrame.vue";
export default defineComponent({
  name: "ScoreBoard",
  components: {
    ScoreFrame,
  },
  data() {
    return {
      frames: undefined as unknown,
    };
  },
  created() {
    this.frames = this.$store.state.scoreBoard;
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
