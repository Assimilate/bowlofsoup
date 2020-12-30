<template>
  <div>
    <ScoreFrame v-if="scoreBoard" :frames="scoreBoard"></ScoreFrame>
    <ScoreFrame v-if="lastStrike" :last-strike="last - strike"></ScoreFrame>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ScoreFrame from "@/components/ScoreFrame.vue";
import { IFrame } from "@/types/frame";

@Options({
  name: "ScoreBoard",
  components: {
    ScoreFrame,
  },
})
export default class ScoreBoard extends Vue {
  scoreBoard: Array<IFrame> = [];
  created() {
    this.scoreBoard = this.$store.state.scoreBoard;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
