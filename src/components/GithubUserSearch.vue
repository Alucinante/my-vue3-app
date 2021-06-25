<template>
    <div>
        <div class="form">
            <input type="text" class="input" v-model="username" placeholder="Search your Github username" />
            <button class="button button-add" @click="searchUsername">Search</button>
        </div>

        
        <div v-if="getUser.id">
            <h2>Result:</h2>
            <div class="g-result">
                <div><img :src="getUser.avatar_url" :alt="'GitHub Avatar for ' + getUser.name " /></div>
                <div>
                    <p><strong>Id:</strong> {{ getUser.id }}</p>
                    <p><strong>Username:</strong> {{ getUser.name }}</p>
                    <p><strong>Status: {{ isUserActive }} </strong> </p>
                </div>
            </div>
        </div>
        <div v-if="getError">
           <p>User doesn't exist.</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

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
                store.dispatch('get_user', this.username).then(
                    () => { this.username = '';}
                );
            }
        },
    },
    computed: {
        getUser() {
            return store.getters.getUser;
        },
        getError() {
            return store.getters.getError;
        },
        isUserActive() {
            return store.getters.isUserActive;
        }
    }
});
</script>