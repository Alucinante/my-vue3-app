import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    count: 0,
    tasks: new Array<any>(),
    username: {},
    error: false
  },
  getters: {
    counter: state => state.count,
    getTasks: state => state.tasks,
    getUsername: state => state.username,
    getError: state => state.error,
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
    set_username(state, username) {
      state.username = username
    }
    ,
    set_error(state, error) {
      state.error = error
    }
  },
  actions: {
    add_task(context, task) {
      context.commit("add_task", task);
    },
    delete_task(context, task) {
      context.commit("delete_task", task);
    },
    get_username({commit}, username ) { // get_username Recibe un objeto
      axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
          commit('set_username', response.data); // ejecuta la funcion set_username y set_username la guarda y despues le pasa response.data que es lo que devuelve la api
          commit('set_error', false)
        })
        .catch(error => {
          commit('set_error', true);
          commit('set_username', {});
        })
    }
  },
})
