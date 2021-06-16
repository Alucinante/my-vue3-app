<template>
    <transition name="show">
        <aside class="sidebar" v-if="open">
        <transition name="fade">
                <div class="sidebar-panel"> 
                    <h2>Exercices</h2>
                    <ul class="sidebar-list">
                        <li><router-link to="/">Exercice Nº1</router-link></li>
                        <li><router-link to="/about">Exercice Nº2</router-link></li>
                        <li><router-link to="/github-user-search">Exercice Nº3</router-link></li>
                    </ul>
                </div>
        </transition>
        </aside>
    </transition>
</template>

<script>
export default {
    name: 'Sidebar',
    props: [
      'open'
    ],
}
</script>