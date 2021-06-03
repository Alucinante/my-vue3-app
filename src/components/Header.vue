<template>
    <header class="header container">
        <div class="menu" @click="$emit('togglenav')"><div /></div>
        <div class="logo">
            <img alt="Vue logo" src="../assets/logo.svg" />
        </div>
        <Navbar />
    </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
    name: 'Header',
    components: {
        Navbar,
    },
}
</script>