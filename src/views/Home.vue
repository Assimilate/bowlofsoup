<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ScoreBoard> </ScoreBoard>
    <ShootBall> </ShootBall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreBoard from "../components/Score/ScoreBoard.vue"; // @ is an alias to /src
import ShootBall from "../components/Shoot/ShootBall.vue";
export default defineComponent({
  name: "Home",
  components: {
    ScoreBoard,
    ShootBall,
  },
});
</script>
