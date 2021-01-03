<template>
  <div class="button-area">
    <button class="button-area__button" @click="shoot">
      <p class="button-area__hole">{{ indexHoles }}</p>
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
  indexHoles = ". .";
  show = false;
  mounted() {
    this.animateBowlingBall();
  }
  shoot() {
    this.$emit("shoot");
  }
  animateBowlingBall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.show = true;
        resolve(true);
      }, 1000);
    });
  }
}
</script>

<style lang="scss" scoped>
// Styling

.button-area {
  margin: 2rem auto;
  width: 10rem;
  height: 10rem;
}

.button-area__button {
  background-color: rgb(167, 13, 13);
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
  height: 25%;
  font-weight: bold;
  font-size: 2rem;
}
</style>
