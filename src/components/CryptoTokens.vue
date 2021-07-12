<template>
    <div>
        <div class="form">

            <input type="text" class="input" v-model="cryptoname" placeholder="Please, enter a cryptoname" />

            <button class="button button-add" @click="addCrypto">Add crypto</button>
        </div>

        <div v-if="getCrypto.id">
            <h2>Crypto list</h2>
            
            <ul class="list">
                <li
                    v-for="(cryptoname, index) in cryptoList"
                    :key="index"
                >
                    {{ getCrypto.name }}
                </li>
            </ul>
            <div class="panel">
                <div class="head">
                    <h3>Name</h3>
                    <h3>Price</h3>
                </div>
                <div class="content">
                    <p>{{ getCrypto.name }}</p>
                    <p>{{ getCrypto.market_data.current_price.usd }}</p>
                </div>
            </div>
        </div>
        <div v-if="getError">
            <p>Crypto doesn't exists.</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

export default defineComponent({
    name: 'CryptoTokens',
    data: function() {
        return {
            cryptoname: '',
        }
    },
    methods: {
        addCrypto() {
            if (this.cryptoname.trim() != '') { 
                store.dispatch('add_crypto', this.cryptoname).then(
                    () => { this.cryptoname = '';}
                );
            }
        },
    },
    computed: {
        getCrypto() {
            return store.getters.getCrypto;
        },
        getError() {
            return store.getters.getError;
        },
        cryptoList() {
            return store.getters.getList;
        },
    }
});
</script>