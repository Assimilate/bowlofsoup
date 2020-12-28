<template>
  <div>
    <Round :rounds="rounds"></Round>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Round from "./Round.vue";
export default defineComponent({
  name: "Board",
  components: {
    Round,
  },
  data() {
    return {
      rounds: [
        {
          type: Object,
          score1: 10,
          score2: 5,
        },
        {
          type: Object,
          score1: 10,
          score2: 5,
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
