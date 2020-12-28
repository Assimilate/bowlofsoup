<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Board> </Board>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "../components/Board.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Board,
  },
});
</script>
