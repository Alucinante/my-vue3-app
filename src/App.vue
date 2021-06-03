<template>
  <div class="app">
    <Sidebar :open="navOpen" />
    <div class="main-panel">
      <Header @togglenav="navOpen = !navOpen" />
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'


export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Sidebar
  },
  data() {
    return {
      navOpen: true
    }
  }
})
</script>