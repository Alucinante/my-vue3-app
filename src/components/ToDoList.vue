<template>
    <div class="to-do-list">
        <div class="form">
            <input type="text" class="input" v-model="task" placeholder="Add task" />
            <button class="button button-add" @click="addTask">Add Item</button>
        </div>

        <h2>To do list</h2>
        <ul class="tasks">
            <li
                v-for="(task, index) in tasks"
                :key="index"
                class="task"
            >
                {{ task }}

            <button class="button button-dt" @click="deleteTask(task)">Delete Item</button>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store'


export default defineComponent({
    name: 'ToDoList',
    data: function() {
        return {
            task: '',
        }
    },
    methods: {
        addTask() {
            if (this.task.trim() != '') { 
                store.dispatch('add_task', this.task).then(
                    () => { this.task = '';}
                );
            }
        },
        deleteTask(task: string) {
            store.dispatch('delete_task', task);
        }
    },
    computed: {
        tasks() {
            return store.getters.getTasks;
        },
    }
});
</script>