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
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment');
      console.log(store.state.count)
    },
    decrement () {
      store.commit('decrement')
    }
  }
/*data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    }
  }*/
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
