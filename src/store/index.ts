import { createStore } from 'vuex'
import axios from 'axios'
import { DateTime } from 'luxon'

export default createStore({
  state: {
    count: 0,
    //tasks: [],
    tasks: new Array<any>(),
    cryptoList: new Array<any>(),
    user: {
      "login": '',
      "id": 0,
      "avatar_url": '',
      "updated_at": '',
    },
    crypto: {
      "id": '',
      "name": '',
      "market_data": '',
      "current_price": '',
      "usd": '',
    },
    error: false,
  },
  getters: {
    counter: state => state.count,
    getTasks: state => state.tasks,
    getList: state => state.cryptoList,
    getUser: state => state.user,
    getError: state => state.error,
    getCrypto: state => state.crypto,
    isUserActive: function(state) {
      const now = DateTime.now();
      const userDate = state.user.updated_at;
      const lastActivityDate = DateTime.fromISO(userDate);

      const lastSixMonths = now.minus({ months: 6 });

      console.log("ultimos 6:"+ lastSixMonths);
      console.log("Fecha de usuario:" + userDate);
      console.log("Last" + lastActivityDate);

      if (lastActivityDate > lastSixMonths) {
        return true
      }
      return false
    },
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    add_task(state, task) {
      state.tasks.push(task);
    },
    delete_task(state, task) {
      const index = state.tasks.indexOf(task);
      state.tasks.splice(index, 1);
    },
    set_user(state, user) {
      state.user = user
    },
    set_error(state, error) {
      state.error = error
    },
    set_crypto(state, crypto) {
      state.crypto = crypto
    },
    add_crypto(state, crypto_id) {
      state.cryptoList.push(crypto_id);
    },
  },
  actions: {
    add_task(context, task) {
      context.commit("add_task", task);
    },
    delete_task(context, task) {
      context.commit("delete_task", task);
    },
    get_user({commit}, username ) { // get_username Recibe un objeto
      axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
          commit('set_user', response.data); // ejecuta la funcion set_username y set_username la guarda y despues le pasa response.data que es lo que devuelve la api
          commit('set_error', false)
        })
        .catch(error => {
          commit('set_error', true);
          commit('set_user', {});
        })
    },
    get_crypto({commit}, crypto_id ) { 
      axios.get(`https://api.coingecko.com/api/v3/coins/${crypto_id}`)
        .then(response => {
          console.log(response.data)
          commit('set_crypto', response.data);
          commit('set_error', false)
        })
        .catch(error => {
          commit('set_error', true);
          commit('set_crypto', {});
        })
    },
    add_crypto(context, crypto_id) {
      context.commit("add_crypto", crypto_id);
    },
  }
})
