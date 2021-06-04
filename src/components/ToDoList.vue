<template>
    <div class="to-do-list">
        <div class="form">
            <input type="text" class="input" v-model="task" placeholder="Add task" />
            <button class="button-add" @click="addTask">Add Item</button>
        </div>

        <h2>To do list</h2>
        <ul class="tasks">
            <li
                v-for="(task, index) in tasks"
                :key="index"
                class="task"
            >
                {{ task }}

            <button class="button-dt" @click="deleteTask(index)">Delete Item</button>
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
            if (this.task.trim() != '') {
                this.tasks.push(this.task);
            }
            this.task = '';
        },
        deleteTask(index:number) {
            this.tasks.splice(index, 1);
        },
    }
});
</script>