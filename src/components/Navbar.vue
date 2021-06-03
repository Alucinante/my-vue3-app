<template>
    <nav class="navbar">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/menu3">Menu 3</router-link></li>
            <li><router-link to="/menu4">Menu 4</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>