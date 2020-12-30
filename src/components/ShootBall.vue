<template>
  <div class="button-area">
    <button class="button-area__button" @click="shoot">
      <p class="button-area__hole">{{ ballHoles }}</p>
      <p class="button-area__hole">{{ thumbHole }}</p>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
@Options({
  emits: ["shoot"],
})
export default class ShootBall extends Vue {
  thumbHole = ".";
  ballHoles = ". .";
  shoot() {
    this.$emit("shoot");
  }
}
</script>

<style lang="scss" scoped>
.button-area {
  margin: 2rem auto;
  width: 10rem;
  height: 10rem;
}

.button-area__button {
  width: 50%;
  height: 50%;
  border-radius: 100rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1rem;
  outline: none;
}

.button-area__hole {
  width: 100%;
  height: 20%;
  font-weight: bold;
  font-size: 2rem;
}
</style>
