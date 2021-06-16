<template>
  <div class="hello">
    <h2>Exercice Nº1: Counter</h2>
    <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store'


export default defineComponent({
  name: 'Counter',
  props: {
    msg: String,
  },
  methods: {
    increment () {
      store.commit('increment');
      console.log(store.state.count)
    },
    decrement () {
      store.commit('decrement')
    }
  },
  computed: {
    count () {
      return store.getters.counter
    }
  }
});
</script>