<template>
    <div class="to-do-list">
        <div class="form">
            <input type="text" class="input" v-model="task" placeholder="Add task" />
            <button class="button-add" @click="addTask">Add Item</button>
            <button class="button-dt" @click="deleteTask">Delete Item</button>
        </div>

        <h2>To do list</h2>
        <ul class="tasks">
            <li
                v-for="task in tasks"
                :key="task"
                class="task"
            >
                {{ task }}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
//import store from '../store'


type Task = string; // Declaro el type
let task: Task; // A la variable le asigno el type


export default defineComponent({
    name: 'ToDoList',
    data: function() {
        return {
            tasks: new Array<string>(),
            task: '',
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task);
            this.task = '';
        },
        //deleteTask() {
        //    this.tasks.splice(1);
        //},
    }
});
</script>