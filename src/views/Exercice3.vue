<template>
  <section class="section about">
    <h1>Exercice Nº3: Github User Search</h1>
    <GithubUserSearch />
  </section>
</template>
<script>
import GithubUserSearch from '@/components/GithubUserSearch.vue'; // @ is an alias to /src
export default {
  name: 'Exercice3',
  components: {
    GithubUserSearch,
  },
}
</script>
