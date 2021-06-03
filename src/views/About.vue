<template>
  <section class="section about">
    <h1>Exercice Nº2: Task list</h1>
    <ToDoList />
  </section>
</template>
<script>
import ToDoList from '@/components/ToDoList.vue'; // @ is an alias to /src
export default {
  name: 'About',
  components: {
    ToDoList,
  },
}
</script>
