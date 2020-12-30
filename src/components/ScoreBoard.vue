<template>
  <div>
    <ScoreFrame v-if="scoreBoard" :scoreBoard="scoreBoard"></ScoreFrame>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScoreFrame from "@/components/ScoreFrame.vue";
import ExtraScoreFrame from "@/components/ScoreFrame.vue";
import { IFrame } from "@/types/frame";

@Options({
  name: "ScoreBoard",
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
<style scoped lang="scss"></style>
