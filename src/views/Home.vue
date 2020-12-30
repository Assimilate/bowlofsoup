<template>
  <div class="home">
    <img
      class="home-image"
      src="https://www.clipartmax.com/png/small/102-1025011_soup-bowl-idle-soup-can-bfdi.png"
      alt="Soup Bowl Idle - Soup Can Bfdi @clipartmax.com"
    />
    <ScoreBoard> </ScoreBoard>
    <ShootBall> </ShootBall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScoreBoard from "@/components/ScoreBoard.vue"; // @ is an alias to /src
import ShootBall from "@/components/ShootBall.vue";
export default defineComponent({
  name: "Home",
  components: {
    ScoreBoard,
    ShootBall,
  },
});
</script>

<style lang="scss" scoped>
.home-image {
  background-image: none;
  width: 10rem;
  height: 10rem;
  margin: 5rem;
}
</style>
