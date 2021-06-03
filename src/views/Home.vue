<template>
  <section class="section home">
    <h1>Welcome to Your Vue.js + TypeScript App</h1>
    <Counter msg=">Exercice Nº1: Counter"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from '@/components/Counter.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Counter,
  },
});
</script>
