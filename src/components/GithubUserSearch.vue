<template>
    <div>
        <div class="form">
            <input type="text" class="input" v-model="username" placeholder="Search your Github username" />
            <button class="button button-add" @click="searchUsername">Search</button>
        </div>

        
        <div v-if="getUsername.id">
            <h2>Result:</h2>
            <div class="g-result">
                <div><img :src="getUsername.avatar_url" :alt="'GitHub Avatar for ' + getUsername.name " /></div>
                <div>
                    <p><strong>Id:</strong> {{ getUsername.id }}</p>
                    <p><strong>Username:</strong> {{ getUsername.name }}</p>
                </div>
            </div>
        </div>
        <div v-if="getError">
           <p>Error</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store'


export default defineComponent({
    name: 'GithubUserSearch',
    data: function() {
        return {
            username: '',
        }
    },
    methods: {
        searchUsername() {
            if (this.username.trim() != '') { 
                store.dispatch('get_username', this.username).then(
                    () => { this.username = '';}
                );
            }
        },
    },
    computed: {
        getUsername() {
            return store.getters.getUsername;
        },
        getError() {
            return store.getters.getError;
        }
    }
});
</script>